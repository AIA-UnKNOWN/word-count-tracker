<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\WordCounts;

class SaveWordCountController extends Controller
{
    public function __invoke(Request $request)
    {
        WordCounts::updateOrCreate(
            [
                'user_id' => $request->get('userId'),
                'date_id' => $request->get('dateId')
            ],
            [
                'count' => $request->get('count')
            ]
        );

        return response()->json(['message' => 'success']);
    }
}
