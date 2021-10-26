<?php

namespace App\Http\Controllers;

use App\Mail\mailResetPassword;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

use App\Models\Ong;
use Exception;
use Mockery\CountValidator\Exact;
use Whoops\Run;

class OngController extends Controller
{
    public function index()
    {
        try {
            return response()->json(Ong::all());
        } catch (\Exception $e) {
            return response()->json(["message" => $e->getMessage()]);
        }
    }

    public function store(Request $request)
    {
        try {
            $data = $request->json()->all();
            $ongs = Ong::where('ong_email', $request->email)->first();

            if (!empty($ongs)) {
                throw new Exception("Email cadastrado, favor verificar seu email.");
            } else {

                $ong = Ong::create($data);
                return response()->json($ong, 201);
            }

        } catch (\Exception $e) {
            return response()->json(["message" => $e->getMessage()], 400);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $data = $request->json()->all();

            $ong = Ong::findOrFail($id);
            $response['response'] = $ong->update($data);


            return response()->json($response, 200);
        } catch (\Exception $e) {
            return response()->json(["message" => $e->getMessage()], 400);
        }
    }
    public function show($id)
    {
        try {
            return response()->json(Ong::findOrFail($id));
        } catch (\Exception $e) {
            return response()->json(["message" => $e->getMessage()], 400);
        }
    }

    public function delete($id)
    {
        try {
            $ong = Ong::findOrFail($id);
            $response['response'] = $ong->delete();

            return response()->json($response, 200);
        } catch (\Exception $e) {
            return response()->json(["message" => $e->getMessage()], 400);
        }
    }

    public function signin(Request $request)
    {
        try {
            $data = $request->json()->all();

            $ong = Ong::where('ong_email', $data['ong_email'])
                ->where('ong_senha', $data['ong_senha'])
                ->first();

            return response()->json($ong, 200);
        } catch (\Exception $e) {
            return response()->json(["message" => $e->getMessage()], 400);
        }
    }


    public function showByName($name)
    {
        try {
            $ong = Ong::where('ong_name', $name)
                ->orWhere('ong_name', 'like', '%' . $name . '%')->get();


            return response()->json($ong, 200);
        } catch (\Exception $e) {
            return response()->json(["message" => $e->getMessage()], 400);
        }
    }

    public function remember($email)
    {
        try {
            $ong = Ong::where('ong_email', $email)
                ->first();

            if (empty($ong)) {
                throw new Exception("Email não encontrado!");
            }
            $passoword = $this->generatePassword(10, true, true, true, true);
            $ong->ong_senha = md5($passoword);
            $ong->save();
            $ong->password = $passoword;
            $mail = $this->sendEmailReset($ong);
            return response()->json($ong, 200);
        } catch (\Exception $e) {
            return response()->json(["message" => $e->getMessage()], 400);
        }
    }

    public function generatePassword($tamanho, $maiusculas, $minusculas, $numeros, $simbolos)
    {
        $ma = "ABCDEFGHIJKLMNOPQRSTUVYXWZ"; // $ma contem as letras maiúsculas
        $mi = "abcdefghijklmnopqrstuvyxwz"; // $mi contem as letras minusculas
        $nu = "0123456789"; // $nu contem os números
        $si = "!@#$%¨&*()_+="; // $si contem os símbolos
        $senha = "";
        if ($maiusculas) {
            // se $maiusculas for "true", a variável $ma é embaralhada e adicionada para a variável $senha
            $senha .= str_shuffle($ma);
        }

        if ($minusculas) {
            // se $minusculas for "true", a variável $mi é embaralhada e adicionada para a variável $senha
            $senha .= str_shuffle($mi);
        }

        if ($numeros) {
            // se $numeros for "true", a variável $nu é embaralhada e adicionada para a variável $senha
            $senha .= str_shuffle($nu);
        }

        if ($simbolos) {
            // se $simbolos for "true", a variável $si é embaralhada e adicionada para a variável $senha
            $senha .= str_shuffle($si);
        }

        // retorna a senha embaralhada com "str_shuffle" com o tamanho definido pela variável $tamanho
        return substr(str_shuffle($senha), 0, $tamanho);
    }
    public function sendEmailReset($data)
    {
        $email = Mail::send(new mailResetPassword($data));
    }
}
