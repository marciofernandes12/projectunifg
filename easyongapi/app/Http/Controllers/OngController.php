<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ong;


class OngController extends Controller
{
    public function index()
    {
        return response()->json(Ong::all());
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
}
