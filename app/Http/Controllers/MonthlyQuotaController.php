<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class MonthlyQuotaController extends Controller
{
    function set(Request $request)
    {
        if ($user = User::find($request->get('id'))) {
            $user->monthly_quota = $request->get('monthlyQuota');
            $user->save();
            return response()->json(['message' => 'success']);
        }

        return response()->json(['message' => 'failed']);
    }

    function get(Request $request)
    {
        $user = User::find($request->get('id'));
        return response()->json($user);
    }
}
