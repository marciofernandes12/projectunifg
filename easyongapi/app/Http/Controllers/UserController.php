<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;


class UserController extends Controller
{
    public function index()
    {
        return response()->json(User::all());
    }

    public function store(Request $request)
    {
        $name = $request->input('name');

        //
    }
    public function update(Request $request, $id)
    {
        //
    }

    public function show($id)
    {
        return response()->json(User::findOrFail($id));
    }


    //
}
