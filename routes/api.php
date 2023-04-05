<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\CategorieMaisonController;
use App\Http\Controllers\MaisonController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => ['cors', 'json.response']], function () {
    Route::post('/register', [AuthController::class,'register']);
    Route::post('/login', [AuthController::class,'login']);

    //Route::middleware([])->group(function () {
    Route::middleware('auth:api')->group(function () {
        Route::post('/user', [AuthController::class,'index']);

        /*Route::get('/user', function (Request $request) {
            return $request->user();
        });*/
        Route::resources([
            'categorie' => CategorieMaisonController::class,
            'maison' => MaisonController::class,
        ]);
    });
});