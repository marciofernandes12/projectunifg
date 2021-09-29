<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->post('/login', 'OngController@login');
$router->post('/cadastro', 'OngController@store');
$router->get('/ongs', 'OngController@index');
$router->get('/ongs/{id}', 'OngController@show');
$router->delete('/ongs/{id}', 'OngController@delete');
$router->put('/ongs/{id}', 'OngController@update');



// $router->group(['prefix' => 'ongs'], function () use ($router) {
//     $router->post('/login', 'OngController@login');
//     $router->post('/cadastro', 'OngController@store');
//     $router->get('', 'OngController@index');
// });
// $router->group(['prefix' => 'users'], function () use ($router) {
//     $router->post('/cadastro', 'UserController@store');
//     $router->put('/alterar/{id}', 'UserController@update');
//     $router->delete('{id}', 'UserController@delete');
// });
