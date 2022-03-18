<?php
function limpiarCadena($valor)
{
    $valor = str_ireplace("SELECT", "", $valor);
    $valor = str_ireplace("COPY", "", $valor);
    $valor = str_ireplace("DELETE", "", $valor);
    $valor = str_ireplace("DROP", "", $valor);
    $valor = str_ireplace("DUMP", "", $valor);
    $valor = str_ireplace(" OR ", "", $valor);
    $valor = str_ireplace("%", "", $valor);
    $valor = str_ireplace("LIKE", "", $valor);
    $valor = str_ireplace("--", "", $valor);
    $valor = str_ireplace("^", "", $valor);
    $valor = str_ireplace("[", "", $valor);
    $valor = str_ireplace("]", "", $valor);
    $valor = str_ireplace("!", "", $valor);
    $valor = str_ireplace("¡", "", $valor);
    $valor = str_ireplace("?", "", $valor);
    $valor = str_ireplace("=", "", $valor);
    $valor = str_ireplace("&", "", $valor);
    return $valor;
}

function comprobarComando($cmd)
{
    if (isset($cmd) && !empty($cmd)) {
        return $cmd;
    } else {
        $output = array(
            'success' => false,
            'msg' => 'parametros no reconocidos',
        );

        echo json_encode($output);
        exit;
    }
}

function comprobarData($data)
{
    if (isset($data) && !empty($data)) {
        return $data;
    } else {
        $output = array(
            'success' => false,
            'msg' => 'parametros no reconocidos'
        );

        echo json_encode($output);
        exit;
    }
}

function capturarDatos($data)
{
    $arrived = json_decode($data, 1);
    return $datos = count($arrived) > 0 ? $arrived : '';
}

function encriptarPassword($pass)
{
    $salt = "P@ssWor!d";
    return $pws = sha1(md5($salt . $pass));
}

function output($error, $success, $session, $msg, $data)
{
    $output = array(
        'error' => $error,
        'success' => $success,
        'session' => $session,
        'msg' => $msg,
        'data' => $data
    );
}

?>
