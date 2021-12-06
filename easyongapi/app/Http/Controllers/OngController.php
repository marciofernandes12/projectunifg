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
            return response()->json(Ong::where('active', 1)->get());
        } catch (\Exception $e) {
            return response()->json(["message" => $e->getMessage()]);
        }
    }

    public function store(Request $request)
    {
        try {
            $data = $request->json()->all();
            $data['ong_senha'] = md5($data['ong_senha']);
            $ongs = Ong::where('ong_email', $request->ong_email)->first();
            if (!empty($ongs)) {
                throw new Exception("Email cadastrado, favor verificar seu email.");
            }
            $data['ong_email'] = strtolower($data['ong_email']);
            $data['ong_senha'] = md5($data['ong_senha']);
            $ong = Ong::create($data);
            return response()->json($ong, 201);
        } catch (\Exception $e) {
            return response()->json(["message" => $e->getMessage()], 400);
        }
    }

    public function update(Request $request, $id)
    {
        try {

            $ong = Ong::findOrFail($id);

            $ong->ong_cnpj_cpf = $request->ong_cnpj_cpf ?? $ong->ong_cnpj_cpf;
            $ong->ong_cidade =  $request->ong_cidade ?? $ong->ong_cidade;
            $ong->ong_bairro =  $request->ong_bairro ?? $ong->ong_bairro;
            $ong->ong_estado =  $request->ong_estado ?? $ong->ong_estado;
            $ong->ong_rua = $request->ong_rua ?? $ong->ong_rua;
            $ong->ong_numero = $request->ong_numero ?? $ong->ong_numero;
            $ong->ong_complemento = $request->ong_complemento ?? $ong->ong_complemento;
            $ong->ong_latitude = $request->ong_latitude ?? $ong->ong_latitude;
            $ong->ong_longitude = $request->ong_longitude ?? $ong->ong_longitude;
            $ong->ong_telefone = $request->ong_telefone ?? $ong->ong_telefone;
            $ong->ong_responsavel = $request->ong_responsavel ?? $ong->ong_responsavel;
            $ong->ong_descricao = $request->ong_descricao ?? $ong->ong_descricao;
            $ong->ong_email = $request->ong_email ?? $ong->ong_email;
            $ong->ong_senha = $request->ong_senha ?? $ong->ong_senha;
            $ong->active = $request->active ?? $ong->active;
            $ong->save();

            return response()->json($ong, 200);
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
            $ong->active = 0;
            $ong->save();

            return response()->json($ong, 200);
        } catch (\Exception $e) {
            return response()->json(["message" => $e->getMessage()], 400);
        }
    }

    public function signin(Request $request)
    {
        try {

            $ong = Ong::where('ong_email', $request->ong_email)
                ->where('ong_senha', md5($request->ong_senha))
                ->where('active', 1)
                ->first();

            if (!$ong) {
                throw new Exception("Usuário ou senha inválida!");
            }
            return response()->json($ong, 200);
        } catch (\Exception $e) {
            return response()->json(["message" => $e->getMessage()], 400);
        }
    }


    public function showByName($name)
    {
        try {
            $ong = Ong::where('ong_name', $name)
                ->orWhere('ong_name', 'like', '%' . $name . '%')
                ->where('active', 1)
                ->get();


            return response()->json($ong, 200);
        } catch (\Exception $e) {
            return response()->json(["message" => $e->getMessage()], 400);
        }
    }

    public function remember(Request $request)
    {
        $data = $request->json()->all();
        try {
            $ong = Ong::where('ong_email', $request->ong_email)
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
