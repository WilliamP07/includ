<?php

namespace App\Http\Controllers;

use App\Models\Emotion;
use App\Models\EmotionTip;

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
            $itemsPerPage =  EmotionTip::count();
            $skip = 0;
        }

        $sortBy = (isset($request->sortBy[0])) ? $request->sortBy[0] : 'id';
        $sort = (isset($request->sortDesc[0])) ? "asc" : 'desc';

        $search = (isset($request->search)) ? "%$request->search%" : '%%';

        $emotiontips = EmotionTip::allDataSearched($search, $sortBy, $sort, $skip, $itemsPerPage);
        $emotiontips = Encrypt::encryptObject($emotiontips, "id");

        $total = EmotionTip::counterPagination($search);

        return response()->json([
            "status" => 200,
            "message" => "Registros obtenidos correctamente.",
            "records" => $emotiontips,
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
        $emotiontips = new EmotionTip;

        $emotiontips->tip_title = $request->tip_title;
        $emotiontips->tip_description = $request->tip_description;
        $emotiontips->emotion_id = Emotion::where('emotion', $request->emotion)->first()->id;
        $emotiontips->status = $request->status == null ? 0 : $request->status;

        $emotiontips->save();

        return response()->json([
            "status" => 200,
            "message" => "Registro creado correctamente.",
            "success" => true,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\EmotionTip  emotiontips
     * @return \Illuminate\Http\Response
     */
    public function show(EmotionTip $emotiontips)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\EmotionTip  $emotiontips
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $data = Encrypt::decryptArray($request->all(), 'id');

        $emotiontips = EmotionTip::where('id', $data['id'])->first();
        $emotiontips->tip_title = $request->tip_title;
        $emotiontips->tip_description = $request->tip_description;
        $emotiontips->emotion_id = Emotion::where('emotion', $request->emotion)->first()->id;
        $emotiontips->status = $request->status == null ? 0 : $request->status;

        $emotiontips->save();

        return response()->json([
            "status" => 200,
            "message" => "Registro modificado correctamente.",
            "success" => true,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\EmotionTip  $emotiontips
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $data = isset($request->selected) ? $request->selected : [];

        if (count($data) > 0) {
            foreach ($data as $item) {
                $item = json_decode($item);

                EmotionTip::where('id', $id)->delete();
            }

            return response()->json([
                "status" => 200,
                "message" => "Registro eliminado correctamente.",
                "success" => true,
            ]);
        }

        $id = Encrypt::decryptValue($request->id);

        EmotionTip::where('id', $id)->delete();

        return response()->json([
            "status" => 200,
            "message" => "Registro eliminado correctamente.",
            "success" => true,
        ]);
    }
}
