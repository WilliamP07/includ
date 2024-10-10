<?php

namespace App\Http\Controllers;

use App\Models\EmotionTips;

use Illuminate\Http\Request;
use Encrypt;

class EmotionTipsController extends Controller
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
            $itemsPerPage =  EmotionTips::count();
            $skip = 0;
        }

        $sortBy = (isset($request->sortBy[0])) ? $request->sortBy[0] : 'id';
        $sort = (isset($request->sortDesc[0])) ? "asc" : 'desc';

        $search = (isset($request->search)) ? "%$request->search%" : '%%';

        $emotiontips = EmotionTips::allDataSearched($search, $sortBy, $sort, $skip, $itemsPerPage);
        $emotiontips = Encrypt::encryptObject($emotiontips, "id");

        $total = EmotionTips::counterPagination($search);

        return response()->json([
            "status" => 200,
            "message"=>"Registros obtenidos correctamente.",
            "records" => $emotiontips,
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
        $emotiontips = new EmotionTips;

		$emotiontips->tip_title = $request->tip_title;
		$emotiontips->tip_description = $request->tip_description;
		$emotiontips->status = $request->status;
		$emotiontips->deleted_at = $request->deleted_at;

        $emotiontips->save();

        return response()->json([
            "status"=>200,
            "message"=>"Registro creado correctamente.",
            "success"=>true,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\EmotionTips  emotiontips
     * @return \Illuminate\Http\Response
     */
    public function show(EmotionTips $emotiontips)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\EmotionTips  $emotiontips
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $data = Encrypt::decryptArray($request->all(), 'id');

        $emotiontips = EmotionTips::where('id', $data['id'])->first();
		$emotiontips->tip_title = $request->tip_title;
		$emotiontips->tip_description = $request->tip_description;
		$emotiontips->status = $request->status;
		$emotiontips->deleted_at = $request->deleted_at;

        $emotiontips->save();

        return response()->json([
            "status"=>200,
            "message"=>"Registro modificado correctamente.",
            "success"=>true,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\EmotionTips  $emotiontips
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $data = isset($request->selected) ? $request->selected : [];

        if (count($data) > 0) {
            foreach ($data as $item) {
                $item = json_decode($item);

                EmotionTips::where('id', $id)->delete();
            }

            return response()->json([
                "status"=>200,
                "message"=>"Registro eliminado correctamente.",
                "success"=>true,
            ]);
        } 

        $id = Encrypt::decryptValue($request->id);

        EmotionTips::where('id', $id)->delete();

        return response()->json([
            "status"=>200,
            "message"=>"Registro eliminado correctamente.",
            "success"=>true,
        ]);
    }
}
