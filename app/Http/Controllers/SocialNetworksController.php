<?php

namespace App\Http\Controllers;

use App\Models\SocialNetworks;
use Illuminate\Http\Request;

class SocialNetworksController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public static function store(array $socialNetworks, int $directoryId)
    {
        $socialNetwork = new SocialNetworks();

        $socialNetwork->facebook = $socialNetworks['facebook'];
        $socialNetwork->youtube = $socialNetworks['youtube'];
        $socialNetwork->instagram = $socialNetworks['instagram'];
        $socialNetwork->x = $socialNetworks['x'];
        $socialNetwork->tiktok = $socialNetworks['tiktok'];
        $socialNetwork->company = $socialNetworks['company'];
        $socialNetwork->directory_id = $directoryId;

        $socialNetwork->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SocialNetworks  $socialNetworks
     * @return \Illuminate\Http\Response
     */
    public function show(SocialNetworks $socialNetworks)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SocialNetworks  $socialNetworks
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SocialNetworks $socialNetworks)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SocialNetworks  $socialNetworks
     * @return \Illuminate\Http\Response
     */
    public function destroy(SocialNetworks $socialNetworks)
    {
        //
    }
}
