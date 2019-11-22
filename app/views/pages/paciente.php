<?php require_once RUTA_APP . '/views/inc/header.php'; ?>
            <div class="view view-cascade gradient-card-header red accent-4 narrower py-2 mx-4 mb-3 d-flex justify-content-between align-items-center">
                <div></div>
                <a href="#" class="white-text mx-3">PACIENTES</a>
                <div></div>
            </div>
            <div class="container-fluid">
                <div>
                    <a id="modalActivate" data-toggle="modal" data-target="#InsertModal" class="btn light-blue darken-3 waves-effect"><i class="far fa-plus-square" aria-hidden="true"></i> AGREGAR</a>
                </div>
                <?php require_once RUTA_APP . '/views/modals/modalInsert.php'; ?>
                    <form class="text-center p-5" id="InsertPaciente" method="POST">
                        <p class="h4 mb-4">NUEVO PACIENTE</p>
                        <div class="md-form form-sm">
                            <input type="text" name="nombre" id="nombre" class="form-control" required>
                            <label for="form8" class="active">Nombre(s):</label>
                        </div>
                        <div class="md-form form-sm">
                            <input type="text" name="app" id="app" class="form-control" required>
                            <label for="form8" class="active">Apellido Paterno:</label>
                        </div>
                        <div class="md-form form-sm">
                            <input type="text" name="apm" id="apm" class="form-control" required>
                            <label for="form8" class="active">Apellido Materno:</label>
                        </div>
                        <button class="btn btn-outline-primary btn-block" type="submit">Enviar</button>
                    </form>
                <?php require_once RUTA_APP . '/views/modals/modalF.php'; ?>
                <br />
                <div class="table-responsive">
                    <table id="dtBasicExample" class="table table-striped table-bordered dt-responsive nowrap" width="100%">
                        <thead>
                            <tr>
                                <th class="th-sm">ACCIONES</th>
                                <th class="th-sm">NOMBRE(S)</th>
                                <th class="th-sm">APELLIDO PATERNO</th>
                                <th class="th-sm">APELLIDO MATERNO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php  foreach ($datos['paciente'] as $paciente) : ?>
                            <tr>
                                <td>
                                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                        <div class="btn-group mr-2 white-text" role="group" aria-label="First group">
                                            <a id="UpdatePacienteModal" data-toggle="modal" onclick="UpdatePaciente(<?php echo $paciente->id_paciente; ?>)" data-target="#UpdateModal" class="btn-sm amber darken-1"><i class="fas fa-edit" aria-hidden="true"></i></a>
                                            <a id="DeletePacienteModal" onclick="DeletePaciente(<?php echo $paciente->id_paciente; ?>)" class="btn-sm red darken-1" data-toggle="modal" data-target="#modalConfirmDelete"><i class="fas fa-trash" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </td>
                                <td id="nombre<?php echo $paciente->id_paciente; ?>"><?php echo strtoupper($paciente->nombre_paciente); ?></td>
                                <td id="app<?php echo $paciente->id_paciente; ?>"><?php echo strtoupper($paciente->app_paciente); ?></td>
                                <td id="apm<?php echo $paciente->id_paciente; ?>"><?php echo strtoupper($paciente->apm_paciente); ?></td>
                            </tr>
                            <?php endforeach;?>
                        </tbody>
                    </table>
                    <?php require_once RUTA_APP . '/views/modals/modalUpdate.php'; ?>
                        <form id="UpdatePaciente" class="text-center p-5" method="POST">
                            <p class="h4 mb-4">PACIENTE</p>
                            <div class="md-form form-sm">
                                <input type="text" id="formId" value=" " class="form-control" hidden>
                                <input type="text" name="nombre" id="formNombre" class="form-control" required>
                                <label for="form8" class="active">Nombre:</label>
                            </div>
                            <div class="md-form form-sm">
                                <input type="text" name="app" id="formApp" class="form-control" required>
                                <label for="form8" class="active">Apellido Paterno:</label>
                            </div>
                            <div class="md-form form-sm">
                                <input type="text" name="apm" id="formApm" class="form-control">
                                <label for="form8" class="active">Apellido Materno:</label>
                            </div>
                            <button class="btn btn-outline-warning btn-block" type="submit">Enviar</button>
                        </form>
                        <?php require_once RUTA_APP . '/views/modals/modalF.php'; ?>
                    </div>  
                    <!-- Funciones Scripts-->
                    <script language="JavaScript" type="text/javascript" src="<?php echo RUTA_URL ?>/js/pages/paciente.js"></script>
                </div>  
<?php require_once RUTA_APP . '/views/inc/footer.php'; ?>