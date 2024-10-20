<?php

namespace App\Http\Controllers;

use App\Models\ImageFile;

use Illuminate\Http\Request;
use Encrypt;
use Str;

class ImageFileController extends Controller
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
            $itemsPerPage =  ImageFile::count();
            $skip = 0;
        }

        $sortBy = (isset($request->sortBy[0])) ? $request->sortBy[0] : 'id';
        $sort = (isset($request->sortDesc[0])) ? "asc" : 'desc';

        $search = (isset($request->search)) ? "%$request->search%" : '%%';

        $imagefile = ImageFile::allDataSearched($search, $sortBy, $sort, $skip, $itemsPerPage);
        foreach($imagefile as $image){
            $image["image_file_shows_in"] = ($image["image_file_shows_in"] == 0) ? "Home" : "Slider";
        }
        $imagefile = Encrypt::encryptObject($imagefile, "id");


        $total = ImageFile::counterPagination($search);

        return response()->json([
            "status" => 200,
            "message"=>"Registros obtenidos correctamente.",
            "records" => $imagefile,
            "total" => $total,
            "success"=>true,
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
        $imagefile = new ImageFile;

        if(FileController::verifyTypeImage($request->image_file_content)){
            $imageContent = FileController::base64ToFile($request->image_file_content, date('Y-m-d') . '-' . Str::random(4), 'images');
        }

		$imagefile->image_file_title = $request->image_file_title;
		$imagefile->image_file_content = $imageContent;
		$imagefile->image_file_description = $request->image_file_description;
		$imagefile->image_file_status = $request->image_file_status;
		$imagefile->image_file_shows_in = ($request->image_file_shows_in == "Home") ? 0 : 1;

        $imagefile->save();

        return response()->json([
            "status"=>200,
            "message"=>"Registro creado correctamente.",
            "success"=>true,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ImageFile  imagefile
     * @return \Illuminate\Http\Response
     */
    public function show(ImageFile $imagefile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ImageFile  $imagefile
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $data = Encrypt::decryptArray($request->all(), 'id');

        $imagefile = new ImageFile;

        if(FileController::verifyTypeImage($request->image_file_content)){
            $imageContent = FileController::base64ToFile($request->image_file_content, date('Y-m-d') . '-' . Str::random(4), 'images');
        }

        $imagefile = ImageFile::where('id', $data['id'])->first();
		$imagefile->image_file_title = $request->image_file_title;
		$imagefile->image_file_content = $imageContent ?? $imagefile->image_file_content;
		$imagefile->image_file_description = $request->image_file_description;
		$imagefile->image_file_status = $request->image_file_status;
		$imagefile->image_file_shows_in = ($request->image_file_shows_in == "Home") ? 0 : 1;

        $imagefile->save();

        return response()->json([
            "status"=>200,
            "message"=>"Registro modificado correctamente.",
            "success"=>true,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ImageFile  $imagefile
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $data = isset($request->selected) ? $request->selected : [];

        if (count($data) > 0) {
            foreach ($data as $item) {
                $item = json_decode($item);

                ImageFile::where('id', $id)->delete();
            }

            return response()->json([
                "status"=>200,
                "message"=>"Registro eliminado correctamente.",
                "success"=>true,
            ]);
        } 

        $id = Encrypt::decryptValue($request->id);

        ImageFile::where('id', $id)->delete();

        return response()->json([
            "status"=>200,
            "message"=>"Registro eliminado correctamente.",
            "success"=>true,
        ]);
    }
}
