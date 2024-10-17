<?php

namespace App\Http\Controllers;

use App\Models\Sponsor;

use Illuminate\Http\Request;
use Encrypt;
use Str;

class SponsorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $itemsPerPage = $request->itemsPerPage;
        $skip = ($request->page - 1) * $request->itemsPerPage;

        // Getting all the records
        if (($request->itemsPerPage == -1)) {
            $itemsPerPage =  Sponsor::count();
            $skip = 0;
        }

        $sortBy = (isset($request->sortBy[0])) ? $request->sortBy[0] : 'id';
        $sort = (isset($request->sortDesc[0])) ? "asc" : 'desc';

        $search = (isset($request->search)) ? "%$request->search%" : '%%';

        $sponsors = Sponsor::allDataSearched($search, $sortBy, $sort, $skip, $itemsPerPage);
        // foreach ($sponsors as $value) {
        //     $value['sponsor_image'] = getenv('STORAGE_URL') . $value['sponsor_image'];
        // }
        $sponsors = Encrypt::encryptObject($sponsors, "id");

        $total = Sponsor::counterPagination($search);

        return response()->json([
            "status" => 200,
            "message" => "Registros obtenidos correctamente.",
            "records" => $sponsors,
            "total" => $total,
            "success" => true,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $sponsors = new Sponsor;

        if (FileController::verifyTypeImage($request->sponsor_image)) {

            $sponsorImage = FileController::base64ToFile($request->sponsor_image, date("Y-m-d") . '-' . Str::random(4), 'sponsors');
        }

        $sponsors->sponsor_name = $request->sponsor_name;
        $sponsors->sponsor_image = $sponsorImage;
        $sponsors->sponsor_description = $request->sponsor_description;
        $sponsors->status = $request->status == null ? 0 : $request->status;

        $sponsors->save();

        return response()->json([
            "status" => 200,
            "message" => "Registro creado correctamente.",
            "success" => true,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Sponsor  sponsors
     * @return \Illuminate\Http\Response
     */
    public function show(Sponsor $sponsors)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Sponsor  $sponsors
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $data = Encrypt::decryptArray($request->all(), 'id');

        if (FileController::verifyTypeImage($request->sponsor_image)) {

            $sponsorImage = FileController::base64ToFile($request->sponsor_image, date("Y-m-d") . '-' . Str::random(4), 'sponsors');
        }

        $sponsors = Sponsor::where('id', $data['id'])->first();
        $sponsors->sponsor_name = $request->sponsor_name;
        $sponsors->sponsor_image = $sponsorImage;
        $sponsors->sponsor_description = $request->sponsor_description;
        $sponsors->status = $request->status == null ? 0 : $request->status;

        $sponsors->save();

        return response()->json([
            "status" => 200,
            "message" => "Registro modificado correctamente.",
            "success" => true,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Sponsor  $sponsors
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $data = isset($request->selected) ? $request->selected : [];

        if (count($data) > 0) {
            foreach ($data as $item) {
                $item = json_decode($item);

                Sponsor::where('id', $id)->delete();
            }

            return response()->json([
                "status" => 200,
                "message" => "Registro eliminado correctamente.",
                "success" => true,
            ]);
        }

        $id = Encrypt::decryptValue($request->id);

        Sponsor::where('id', $id)->delete();

        return response()->json([
            "status" => 200,
            "message" => "Registro eliminado correctamente.",
            "success" => true,
        ]);
    }
}
