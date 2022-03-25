<?php

require_once 'helpers/config.php';

use Firebase\JWT\JWT;
define("KEY", "d3s@rrOllOurb@n0", true);

$cmd = comprobarComando($_POST['cmd']);
$headers = '';

switch ($cmd) {
    case 1:
        $data = comprobarData($_POST['data']);
        $data = capturarDatos($data);
        login($data);
        break;
    case 2:
        include_once ("helpers/authorization.php");
        obtenerInformacion($headers);
        break;
    case 3:
        include_once ("helpers/authorization.php");
        $data = comprobarData($_POST['data']);
        $data = capturarDatos($data);
        addUser($data, $headers);
        break;
    case 4:
        include_once ("helpers/authorization.php");
        $data = comprobarData($_POST['data']);
        $data = capturarDatos($data);
        modificarUser($data, $headers);
        break;
    case 5:
        include_once ("helpers/authorization.php");
        catalogoUser($headers);
        break;
    default:
        break;
}

function login($data){
    if(!$data['email'] || !$data['password']){
        $jwt = '';
        $output = array (
            'success' => false,
            'session' => false,
            'msg' => 'Faltan datos'
        );
        echo json_encode($output);
        exit;
    } else {
        $con = connectDB();
        $pass = encriptarPassword($data['password']);
        $SQL = "SELECT status FROM users WHERE email = '".$data['email']."' AND password = '".$pass."'";
        $query = mysqli_query($con, $SQL);
        $datos = array();

        if($query){
            if(mysqli_num_rows($query) > 0){
                while($row = mysqli_fetch_array($query)) {
                    $datos[] = $row;
                }

                $user = array (
                    'iat' => time(),
                    'exp' => time() + (60*240),
                );

                $jwt = JWT::encode($user, KEY);

                $output = array (
                    'success' => true,
                    'session' => true,
                    'msg' => 'Inicio de secion exitoso',
                    'data' => $datos,
                    'token' => $jwt
                );

                $SQL2 = "UPDATE users SET token='".$jwt."' WHERE email = '".$data['email']."' AND password = '".$pass."'";
                $query2 = mysqli_query($con, $SQL2);

            } else {
                $output = array (
                    'success' => false,
                    'session' => false,
                    'msg' => 'Usuario no localizado'
                );
            }
        } else {
            $output = array (
                'success' => false,
                'session' => false,
                'msg' => 'No se Pudo ejecutar la consulta',
            );
        }

        mysqli_close($con);
        echo json_encode($output);
        exit;
    }
}
function obtenerInformacion ($headers){
    $con = connectDB();
    $SQL = "SELECT token FROM users WHERE token = '".$headers['Authorization']."'";
    $query = mysqli_query($con, $SQL);

    if($query){
        if(mysqli_num_rows($query) > 0){
            $con = connectDB();
            $SQL = "SELECT usuario, status, dependencia, permiso FROM users WHERE token = '".$headers['Authorization']."'";
            $query = mysqli_query($con, $SQL);

            if($query){
                if(mysqli_num_rows($query) > 0){
                    while($row = mysqli_fetch_array($query)) {
                        $datos[] = $row;
                    }
                    $output = array (
                        'success' => true,
                        'session' => true,
                        'data' => $datos
                    );
                } else {
                    $output = array (
                        'success' => false,
                        'session' => true,
                        'msg' => 'Usuario no localizado',
                    );
                }
            } else {
                $output = array (
                    'success' => false,
                    'session' => true,
                    'msg' => 'No se Pudo ejecutar la consulta',
                );
            }

            echo json_encode($output);
            exit;
        } else {
            $output = array (
                'success' => false,
                'session' => false,
                'msg' => 'Favor de iniciar sesion'
            );

            echo json_encode($output);
            exit;
        }
    }else{
        $output = array (
            'success' => false,
            'session' => true,
            'msg' => 'No se Pudo ejecutar la consulta',
        );

        echo json_encode($output);
        exit;
    }

    mysqli_close($con);
}
function addUser($data, $headers){
    if(!$headers['Authorization']){
        $con = connectDB();
        $SQL = "SELECT token FROM users WHERE token = '".$headers['Authorization']."'";
        $query = mysqli_query($con, $SQL);

        if(!$query){
            $output = array (
                'success' => false,
                'session' => false,
                'msg' => 'Falta parametros'
            );

            $SQL2 = "UPDATE users SET token='' WHERE token = '" . $headers['Authorization'] . "'";
            $query2 = mysqli_query($con, $SQL2);

            echo json_encode($output);
            exit;
        }
    } else {
        if(!$data['usuario'] || !$data['status'] || !$data['email'] || !$data['departamento'] || !$data['permiso']) {
            $output = array (
                'success' => false,
                'session' => true,
                'msg' => 'Faltan datos',
                'sql' => $data
            );

            echo json_encode($output);
            exit;
        } else {
            $con = connectDB();
            $SQL = "INSERT INTO users (usuario, status, email, departamento, permiso) VALUES ('" . $data['usuario'] . "', '" . $data['status'] . "', '" . $data['email'] . "', '" . $data['departamento'] . "', '" . $data['permiso'] ."')";
            $query = mysqli_query($con, $SQL);
            $datos = array();

            if ($query) {
                $output = array(
                    'success' => true,
                    'session' => true,
                    'msg' => 'Se actualizo correctamente la base de datos',
                );

            } else {
                $output = array(
                    'success' => false,
                    'session' => true,
                    'msg' => 'No se Pudo ejecutar la consulta',
                    'sql' => $SQL
                );
            }

            mysqli_close($con);
            echo json_encode($output);
            exit;
        }
    }
}
function modificarUser($data, $headers){
    if(!$headers['Authorization']){
        $con = connectDB();
        $SQL = "SELECT token FROM users WHERE token = '".$headers['Authorization']."'";
        $query = mysqli_query($con, $SQL);

        if(!$query){
            $output = array (
                'success' => false,
                'session' => false,
                'msg' => 'Falta parametros'
            );

            $SQL2 = "UPDATE users SET token='' WHERE token = '" . $headers['Authorization'] . "'";
            $query2 = mysqli_query($con, $SQL2);

            echo json_encode($output);
            exit;
        }
    } else {
        if(!$data['usuario'] || !$data['status'] || !$data['email'] || !$data['departamento'] || !$data['permiso']) {
            $output = array (
                'success' => false,
                'session' => false,
                'msg' => 'Faltan datos'
            );

            echo json_encode($output);
            exit;
        } else {
            $con = connectDB();
            $SQL = "UPDATE users SET usuario='" . $data['usuario'] . "', status='" . $data['status'] . "', email='" . $data['email'] . "', departamento='" . $data['departamento'] . "', permiso='" . $data['permiso'] . "' WHERE id='" . $data['id'] . "'";
            $query = mysqli_query($con, $SQL);

            if ($query) {
                $output = array(
                    'success' => true,
                    'session' => true,
                    'msg' => 'Se actualizo correctamente la base de datos',
                    'sql' => $SQL
                );

            } else {
                $output = array(
                    'success' => false,
                    'session' => true,
                    'msg' => 'No se Pudo ejecutar la consulta',
                    'sql' => $SQL
                );
            }

            mysqli_close($con);
            echo json_encode($output);
            exit;
        }
    }
}
function catalogoUser($headers){
    if(!$headers['Authorization']){
        $con = connectDB();
        $SQL = "SELECT token FROM users WHERE token='".$headers['Authorization']."'";
        $query = mysqli_query($con, $SQL);

        if(!$query){
            $output = array (
                'success' => false,
                'session' => false,
                'msg' => 'Falta parametros'
            );

            $SQL2 = "UPDATE users SET token='' WHERE token = '" . $headers['Authorization'] . "'";
            $query2 = mysqli_query($con, $SQL2);

            echo json_encode($output);
            exit;
        }
    } else {
        $con = connectDB();
        $SQL = "SELECT * FROM users ORDER BY status DESC";
        $data = array();
        $query = mysqli_query($con, $SQL);
        if ($query) {
            if (mysqli_num_rows($query) > 0) {
                while ($row = mysqli_fetch_array($query)) {
                    $data[] = $row;
                }
                $output = array(
                    'success' => true,
                    'session' => true,
                    'msg' => 'Registros encontrados',
                    'data' => $data,
                );
            } else {
                $output = array(
                    'success' => false,
                    'session' => true,
                    'msg' => 'No existen datos'
                );
            }
        } else {
            $output = array(
                'success' => false,
                'session' => true,
                'msg' => 'No se Pudo ejecutar la consulta',
                'sql' => $SQL
            );
        }
        mysqli_close($con);
        echo json_encode($output);
        exit;
    }
}
?>
