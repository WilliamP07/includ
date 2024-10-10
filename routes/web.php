<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\GenderController;
use App\Http\Controllers\InterestController;
use App\Http\Controllers\SponsorController;
use App\Http\Controllers\ZoneController;
use App\Http\Controllers\DirectoryController;
use App\Http\Controllers\EmotionTipsController;

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

Route::get('/', fn() => view('auth/login'));

Auth::routes(['verify' => true, 'remember_me' => false]);

Route::group(['middleware' => ['auth']], function () {
    Route::group(['middleware' => ['has.role:Administrador']], function () {

        Route::get('/home', [HomeController::class, 'index'])->name('home');

        //Apis
        Route::resource('/api/web/interest', InterestController::class);
        Route::delete('/api/web/interest', [InterestController::class, 'destroy']);

        Route::resource('/api/web/gender', GenderController::class);
        Route::delete('/api/web/gender', [GenderController::class, 'destroy']);

        Route::resource('/api/web/sponsor', SponsorController::class);
        Route::delete('/api/web/sponsor', [SponsorController::class, 'destroy']);

        Route::resource('/api/web/zone', ZoneController::class);
        Route::delete('/api/web/zone', [ZoneController::class, 'destroy']);

        Route::resource('/api/web/directory', DirectoryController::class);
        Route::delete('/api/web/directory', [DirectoryController::class, 'destroy']);

        Route::resource('/api/web/emotionTip', EmotionTipsController::class);
        Route::delete('/api/web/emotionTip', [EmotionTipsController::class, 'destroy']);

        Route::get('posts', [PostController::class, 'index']);
        Route::post('post', [PostController::class, 'store']);

        Route::post('comment', [PostController::class, 'comment']);

        Route::get('user', [UserController::class, 'index']);

        Route::put('profile', [UserController::class, 'update']);

        // Views
        Route::get('/users', fn() => view('user.index'));
        Route::get('/profile', fn() => view('profile.index'));
    });
});
