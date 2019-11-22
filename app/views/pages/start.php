<?php require_once RUTA_APP . '/views/inc/header.php'; ?>
    <div class = "text-center">
        <img src="<?php echo RUTA_URL ?>/imagenes/img/LOGO.png" width="50%" class="img-fluid" alt="Responsive image">
        <!--<table id="dtBasicExample" class="table table-striped display" cellspacing="0" width="100%">
            <thead>
                <tr>
                    <th class="th-sm">CÓDIGO DE BARRA
                    </th>
                    <th class="th-sm">ARTICULO
                    </th>
                    <th class="th-sm">PRECIO COMPRA
                    </th>
                    <th class="th-sm">PRECIO VENTA
                    </th>
                    <th class="th-sm">ACCIONES
                    </th>
                </tr>
            </thead>
            <tbody>
                <?php  foreach ($datos['articulos'] as $articulos) : ?>
                <tr>
                    <td><?php echo $articulos->codigo_barra ?></td>
                    <td><?php echo $articulos->descripcion ?></td>
                    <td><?php echo $articulos->precio_compra ?></td>
                    <td><?php echo strtoupper($articulos->precio_venta); ?></td>
                    <td>
                        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                            <div class="btn-group mr-2" role="group" aria-label="First group">
                                <a href="<?php echo RUTA_URL;?>/pages/editar/<?php echo $articulos->id_articulo;?>" class="btn-sm amber darken-1"><i class="fas fa-edit" aria-hidden="true"></i></a>
                                <a href="<?php echo RUTA_URL;?>/pages/borrar/<?php echo $articulos->id_articulo;?>" class="btn-sm red" data-toggle="modal" data-target="#modalConfirmDelete"><i class="fas fa-trash-alt" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </td>
                </tr>
                <?php endforeach;?>
            </tbody>
        </table>-->
    </div>
<?php require_once RUTA_APP . '/views/inc/footer.php'; ?>