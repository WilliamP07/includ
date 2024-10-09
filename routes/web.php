<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('auth/login');
});

Auth::routes(['verify' => true, 'remember_me' => false]);

Route::group(['middleware' => ['auth']], function () {

    Route::get('/home', [HomeController::class, 'index'])->name('home');

    //posts
    Route::get('posts', [PostController::class, 'index']);
    Route::post('post', [PostController::class, 'store']);
    Route::post('comment', [PostController::class, 'comment']);
    
    Route::get('user', [UserController::class, 'index']);
    Route::put('profile', [UserController::class, 'update']);

    // Views
    Route::get('/users', function () {
        return view('user.index');
    });
    Route::get('/profile', function () {
        return view('profile.index');
    });
});
// });
