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

        print($ong);

    }

    public function update(Request $request, $id)
    {
        //
    }

    public function show($id)
    {
        return response()->json(Ong::findOrFail($id));
    }


    //
}
