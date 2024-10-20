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
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\EmotionController;
use App\Http\Controllers\ImageFileController;
use App\Http\Controllers\VideoController;


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

    Route::get('/home', [HomeController::class, 'index'])->name('home');

    Route::group(['middleware' => ['has.role:Administrador']], function () {

        //Apis
        Route::resource('/api/web/user', UserController::class);
        Route::delete('/api/web/user', [UserController::class, 'destroy']);

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

        Route::resource('/api/web/department', DepartmentController::class);
        Route::delete('/api/web/department', [DepartmentController::class, 'destroy']);

        Route::resource('/api/web/emotion', EmotionController::class);
        Route::delete('/api/web/emotion', [EmotionController::class, 'destroy']);

        Route::resource('/api/web/imageFile', ImageFileController::class);
        Route::delete('/api/web/imageFile', [ImageFileController::class, 'destroy']);

        Route::resource('/api/web/video', VideoController::class);
        Route::delete('/api/web/video', [VideoController::class, 'destroy']);
        // Route::get('posts', [PostController::class, 'index']);
        // Route::post('post', [PostController::class, 'store']);

        // Route::post('comment', [PostController::class, 'comment']);

        // Route::get('user', [UserController::class, 'index']);

        // Route::put('profile', [UserController::class, 'update']);

        // Views
        Route::get('/profile', fn() => view('profile.index'));
        Route::get('/users', fn() => view('user.index'));
        Route::get('/directories', fn() => view('directory.index'));
        Route::get('/emotion-tips', fn() => view('emotion_tip.index'));
        Route::get('/emotions', fn() => view('emotion.index'));
        Route::get('/genders', fn() => view('gender.index'));
        Route::get('/interests', fn() => view('interest.index'));
        Route::get('/sponsors', fn() => view('sponsor.index'));
        Route::get('/zones', fn() => view('zone.index'));
        Route::get('/departments', fn() => view('department.index'));
        Route::get('/municipalities', fn() => view('municipality.index'));
        Route::get('/images', fn() => view('image_file.index'));
        Route::get('/videos', fn() => view('video.index'));
    });
});
