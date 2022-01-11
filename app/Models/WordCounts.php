<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WordCounts extends Model
{
    use HasFactory;

    protected $fillable = ['date_id', 'count'];
}
