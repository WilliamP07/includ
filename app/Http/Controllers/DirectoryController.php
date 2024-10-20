<?php

namespace App\Http\Controllers;

use App\Models\Directory;
use App\Models\Zone;
use App\Models\DirectoryServices;
use App\Models\SocialNetworks;

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
            $itemsPerPage =  Directory::count();
            $skip = 0;
        }

        $sortBy = (isset($request->sortBy[0])) ? $request->sortBy[0] : 'id';
        $sort = (isset($request->sortDesc[0])) ? "asc" : 'desc';

        $search = (isset($request->search)) ? "%$request->search%" : '%%';

        $directories = Directory::allDataSearched($search, $sortBy, $sort, $skip, $itemsPerPage);

        foreach ($directories as $key => $value) {
            $arrSocialNetworks = SocialNetworks::where('directory_id', $value['id'])->get();
            $value['socialNetworks'] = $arrSocialNetworks;
            $arrDirectoryServices = DirectoryServices::where('directory_id', $value['id'])->get();
            $value['directoryServices'] = $arrDirectoryServices;

            $directories[$key] = $value;
        }

        $directories = Encrypt::encryptObject($directories, "id");
        $total = Directory::counterPagination($search);

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
        // dd($request->name);
        $directories = new Directory;
        
        $directories->name = $request['params']['data']['name'];
        $directories->phone = $request['params']['data']['phone'];
        $directories->address = $request['params']['data']['address'];
        $directories->zone_id = Zone::where('zone_name', $request['params']['data']['zone_name'])->first()->id;
        $directories->status = $request['params']['data']['status'] == null ? 0 : $request['params']['data']['status'];
        
        $directories->save();


        DirectoryServicesController::store($request['params']['directoryServices'], $directories->id);

        SocialNetworksController::store($request['params']['socialNetworks'], $directories->id);

        return response()->json([
            "status" => 200,
            "message" => "Registro creado correctamente.",
            "success" => true,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Directory  directories
     * @return \Illuminate\Http\Response
     */
    public function show(Directory $directories)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Directory  $directories
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $data = Encrypt::decryptArray($request->all(), 'id');

        $directories = Directory::where('id', $data['id'])->first();
        $directories->name = $request->name;
        $directories->phone = $request->phone;
        $directories->address = $request->address;
        $directories->zone_id = Zone::where('zone_name', $request->zone_name)->first()->id;
        $directories->status = $request->status == null ? 0 : $request->status;

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
     * @param  \App\Models\Directory  $directories
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $data = isset($request->selected) ? $request->selected : [];

        if (count($data) > 0) {
            foreach ($data as $item) {
                $item = json_decode($item);

                Directory::where('id', $id)->delete();
            }

            return response()->json([
                "status" => 200,
                "message" => "Registro eliminado correctamente.",
                "success" => true,
            ]);
        }

        $id = Encrypt::decryptValue($request->id);

        Directory::where('id', $id)->delete();

        return response()->json([
            "status" => 200,
            "message" => "Registro eliminado correctamente.",
            "success" => true,
        ]);
    }
}
