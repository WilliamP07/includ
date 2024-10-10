<?php

namespace App\Http\Controllers;

use App\Models\Directories;
use App\Models\Zone;

use Illuminate\Http\Request;
use Encrypt;

class DirectoryController extends Controller
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
            $itemsPerPage =  Directories::count();
            $skip = 0;
        }

        $sortBy = (isset($request->sortBy[0])) ? $request->sortBy[0] : 'id';
        $sort = (isset($request->sortDesc[0])) ? "asc" : 'desc';

        $search = (isset($request->search)) ? "%$request->search%" : '%%';

        $directories = Directories::allDataSearched($search, $sortBy, $sort, $skip, $itemsPerPage);
        $directories = Encrypt::encryptObject($directories, "id");

        $total = Directories::counterPagination($search);

        return response()->json([
            "status" => 200,
            "message" => "Registros obtenidos correctamente.",
            "records" => $directories,
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
        $directories = new Directories;

        $directories->name = $request->name;
        $directories->phone = $request->phone;
        $directories->address = $request->address;
        $directories->zone_id = Zone::where('zone_name', $request->zone_name)->first()->id;
        $directories->status = $request->status;
        $directories->deleted_at = $request->deleted_at;

        $directories->save();

        return response()->json([
            "status" => 200,
            "message" => "Registro creado correctamente.",
            "success" => true,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Directories  directories
     * @return \Illuminate\Http\Response
     */
    public function show(Directories $directories)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Directories  $directories
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $data = Encrypt::decryptArray($request->all(), 'id');

        $directories = Directories::where('id', $data['id'])->first();
        $directories->name = $request->name;
        $directories->phone = $request->phone;
        $directories->address = $request->address;
        $directories->zone_id = Zone::where('zone_name', $request->zone_name)->first()->id;
        $directories->status = $request->status;
        $directories->deleted_at = $request->deleted_at;

        $directories->save();

        return response()->json([
            "status" => 200,
            "message" => "Registro modificado correctamente.",
            "success" => true,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Directories  $directories
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $data = isset($request->selected) ? $request->selected : [];

        if (count($data) > 0) {
            foreach ($data as $item) {
                $item = json_decode($item);

                Directories::where('id', $id)->delete();
            }

            return response()->json([
                "status" => 200,
                "message" => "Registro eliminado correctamente.",
                "success" => true,
            ]);
        }

        $id = Encrypt::decryptValue($request->id);

        Directories::where('id', $id)->delete();

        return response()->json([
            "status" => 200,
            "message" => "Registro eliminado correctamente.",
            "success" => true,
        ]);
    }
}
