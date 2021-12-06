<?php

namespace App\Http\Controllers;

use App\Mail\mailResetPassword;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

use App\Models\Ong;
use App\Models\Indicacao;
use Exception;
use Mockery\CountValidator\Exact;
use Whoops\Run;

class IndicacaoController extends Controller
{
    public function indicacao(Request $request)
    {
        try {
            $data = $request->all();
            $ong = indicacao::create($data);
            return response()->json($ong, 201);
        } catch (\Exception $e) {
            return response()->json(["message" => $e->getMessage()], 400);
        }
    }
}
