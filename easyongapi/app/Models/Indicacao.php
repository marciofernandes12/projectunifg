<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Indicacao extends Model
{
    use HasFactory;

    protected $table = 'indicacoes';
    protected $primaryKey = 'indicacao_id';
    protected $fillable = [
        'indicacao',
        'updated_at',
        'created_at',
    ];
}
