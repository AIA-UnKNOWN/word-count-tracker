<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\WordCounts;

class GetWordCountController extends Controller
{
    public function __invoke(Request $request)
    {
        $wordCount = WordCounts::select('*')
            ->where('date_id', $request->get('id'))
            ->first();
            
        return response()->json($wordCount);
    }
}
