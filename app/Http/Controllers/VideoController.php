<?php

namespace App\Http\Controllers;

use App\Models\Video;

use Illuminate\Http\Request;
use Encrypt;

class VideoController extends Controller
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
            $itemsPerPage =  Video::count();
            $skip = 0;
        }

        $sortBy = (isset($request->sortBy[0])) ? $request->sortBy[0] : 'id';
        $sort = (isset($request->sortDesc[0])) ? "asc" : 'desc';

        $search = (isset($request->search)) ? "%$request->search%" : '%%';

        $videos = Video::allDataSearched($search, $sortBy, $sort, $skip, $itemsPerPage);
        $videos = Encrypt::encryptObject($videos, "id");

        $total = Video::counterPagination($search);

        return response()->json([
            "status" => 200,
            "message"=>"Registros obtenidos correctamente.",
            "records" => $videos,
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
        $videos = new Video;

		$videos->video_title = $request->video_title;
		$videos->video_description = $request->video_description;
		$videos->link = $request->link;
		$videos->show_in = $request->show_in;
		$videos->status = $request->status == null ? 0 : $request->status;

        $videos->save();

        return response()->json([
            "status"=>200,
            "message"=>"Registro creado correctamente.",
            "success"=>true,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Video  videos
     * @return \Illuminate\Http\Response
     */
    public function show(Video $videos)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Video  $videos
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $data = Encrypt::decryptArray($request->all(), 'id');

        $videos = Video::where('id', $data['id'])->first();
        $videos->video_title = $request->video_title;
        $videos->video_description = $request->video_description;
		$videos->link = $request->link;
        $videos->show_in = $request->show_in;
		$videos->status = $request->status == null ? 0 : $request->status;

        $videos->save();

        return response()->json([
            "status"=>200,
            "message"=>"Registro modificado correctamente.",
            "success"=>true,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Video  $videos
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $data = isset($request->selected) ? $request->selected : [];

        if (count($data) > 0) {
            foreach ($data as $item) {
                $item = json_decode($item);

                Video::where('id', $id)->delete();
            }

            return response()->json([
                "status"=>200,
                "message"=>"Registro eliminado correctamente.",
                "success"=>true,
            ]);
        } 

        $id = Encrypt::decryptValue($request->id);

        Video::where('id', $id)->delete();

        return response()->json([
            "status"=>200,
            "message"=>"Registro eliminado correctamente.",
            "success"=>true,
        ]);
    }
}
