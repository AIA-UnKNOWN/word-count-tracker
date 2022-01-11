<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SaveWordCountController;
use App\Http\Controllers\GetWordCountController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/sample', function() {
    return response()->json(['message' => 'ok']);
});

Route::post('/get-word-count', GetWordCountController::class)
    ->name('get-word-count');

Route::post('/save-word-count', SaveWordCountController::class)
    ->name('save-word-count');