<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use DB;
use Hash;
use Spatie\Permission\Models\Role;
use Encrypt;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $user = User::find(auth()->user()->id);

        // Getting the role of the user
        $role = auth()->user()->getRoleNames()[0];
        $user->role = $role;


        return response()->json([
            "status" => "success",
            "message" => "Registros obtenidos correctamente.",
            "user" => $user,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {}

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $user = User::find(auth()->user()->id);

        $data = [
            "name" => $request->name,
            "email" => $request->email,
            "alias" => $request->alias,
            "address" => $request->address,
            "birth_date" => $request->birth_date,
            "about_me" => $request->about_me,
            "facebook" => $request->facebook,
            "x" => $request->x,
            "instagram" => $request->instagram,
        ];

        $user->update($data);

        return response()->json([
            "status" => "success",
            "message" => "Perfil actualizado correctamente."
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request) {}
}
