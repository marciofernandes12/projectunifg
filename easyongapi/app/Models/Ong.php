<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ong extends Model
{
    use HasFactory;

    protected $table = 'ongs';
    protected $primaryKey = 'ong_id';
    protected $fillable = [
        'ong_name',
        'ong_cnpj_cpf',
        'ong_cidade',
        'ong_bairro',
        'ong_estado',
        'ong_rua',
        'ong_numero',
        'ong_complemento',
        'ong_latitude',
        'ong_longitude',
        'ong_telefone',
        'ong_responsavel',
        'ong_descricao',
        'ong_email',
        'ong_senha',
        'active',
        'updated_at',
        'created_at'
    ];
}
