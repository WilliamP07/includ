<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Comment;
use Illuminate\Support\Str;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::all();

        foreach ($posts as $post) {
            $post->image = asset($post->image);
            $post->comments = Comment::where('post_id', $post->id)->get();
        }

        return response()->json([
            "message" => "Registro obtenidos correctamente",
            "posts" => $posts,
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
        if (FileController::verifyTypeImage($request->image)) {
            $postImage = FileController::base64ToFile($request->image, Str::random(6), 'images');
        }

        $post = new Post();

        $post->title = $request->title;
        $post->description = $request->description;
        $post->user = auth()->user()->name;
        $post->image = $postImage;

        $post->save();

        return response()->json([
            "status" => "success",
            "message" => "Publicación creada correctamente",
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function comment(Request $request)
    {
        // dd($request['params']['id']);
        $comment = new Comment();

        $comment->post_id = $request['params']['id'];
        $comment->comment = $request['params']['comment'];
        $comment->user = auth()->user()->name;

        $comment->save();

        return response()->json([
            "status" => "success",
            "message" => "Mensaje enviado correctamente",
        ]);
    }

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
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
