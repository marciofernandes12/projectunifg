<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ong;


class OngController extends Controller
{
    public function index()
    {
        return response()->json(Ong::all());
        // ->header('Content-Type', 'json')
        //     ->header('Access-Control-Allow-Origin','*')
        //     ->header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE',)
        //     ->header('Access-Control-Allow-Credentials','true')
        //     ->header('Access-Control-Max-Age','86400')
        //     ->header('Access-Control-Allow-Headers', '*');
    }

    public function store(Request $request)
    {
        $data = $request->json()->all();

        $ong = Ong::create($data);

        if(!$ong){
            return response()->json($ong, 400);
        }

        return response()->json($ong, 201);
    }

    public function update(Request $request, $id)
    {
        $data = $request->json()->all();

        $ong = Ong::find($id);
        $response['response'] = $ong->update($data);

        if(!$response){
            return response()->json($response, 400);
        }

        return response()->json($response, 200);
    }

    public function show($id)
    {
        return response()->json(Ong::findOrFail($id));
    }

    public function delete($id)
    {
        $ong = Ong::find($id);
        $response['response'] = $ong->delete();

        print($response);
        if(!$response){
            return response()->json($response, 400);
        }

        return response()->json($response, 200);
    }

    public function signin(Request $request)
    {
        $data = $request->json()->all();

        $ong = Ong::where(
            ['ong_email'=>$data['ong_email']],
            ['ong_senha'=>$data['ong_senha']]
        )
        ->first();

        if(!$ong){
            return response()->json($ong, 400);
        }

        return response()->json($ong, 200);
    }


    public function showByName($name)
    {
        $ong = Ong::where(
            'ong_name', $name,
        )
        ->orWhere('ong_name', 'like', '%' . $name . '%')->get();

        if(!$ong){
            return response()->json($ong, 400);
        }

        return response()->json($ong, 200);
    }

    public function remember($email)
    {
    }
}
