<?php

use App\Http\Controllers\OngController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/login', [OngController::class, 'signin'])->name('OngController@signin');
Route::post('/cadastro', [OngController::class, 'store'])->name('OngController@store');
Route::post('/remember', [OngController::class, 'remember'])->name('OngController@remember');
Route::get('/ong/{name}', [OngController::class, 'showByName'])->name('OngController@showByName');
Route::get('/ongs', [OngController::class, 'index'])->name('OngController@index');
Route::get('/ongs/{id}', [OngController::class, 'show'])->name('OngController@show');
Route::put('/ongs/{id}', [OngController::class, 'update'])->name('OngController@update');
Route::patch('/ongs/{id}', [OngController::class, 'update'])->name('OngController@update');
Route::delete('/ongs/{id}', [OngController::class, 'delete'])->name('OngController@delete');
