<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\WordCounts;

class SaveWordCountController extends Controller
{
    public function __invoke(Request $request)
    {
        $wordCount = new WordCounts;
        $wordCount->date_id = $request->get('dateId');
        $wordCount->count = $request->get('count');
        $wordCount->save();

        return response()->json(['message' => 'success']);
    }
}
