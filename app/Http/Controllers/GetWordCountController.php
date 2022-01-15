<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\WordCounts;

class GetWordCountController extends Controller
{
    public function __invoke(Request $request)
    {
        $wordCount = WordCounts::select('*')
            ->where('user_id', $request->get('userId'))
            ->where('date_id', $request->get('dateId'))
            ->first();
            
        return response()->json($wordCount);
    }
}
