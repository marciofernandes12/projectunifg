<?php

namespace App\Http\Controllers;

use App\Models\Ong;
use Illuminate\Http\Request;

class OngController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       try{

            return response()->json(Ong::all(),200);
       }
       catch(Exception $e){
        return response()->json($e->message());
       }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
   

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Ong  $ong
     * @return \Illuminate\Http\Response
     */
    public function show(Ong $ong)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Ong  $ong
     * @return \Illuminate\Http\Response
     */
    public function edit(Ong $ong)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Ong  $ong
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Ong $ong)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Ong  $ong
     * @return \Illuminate\Http\Response
     */
    public function destroy(Ong $ong)
    {
        //
    }
}
