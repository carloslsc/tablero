<?php require_once RUTA_APP . '/views/inc/header.php'; ?>
            <div class="view view-cascade gradient-card-header red accent-4 narrower py-2 mx-4 mb-3 d-flex justify-content-between align-items-center">
                <div></div>
                <a href="#" class="white-text mx-3">CITAS</a>
                <div></div>
            </div>
            <div class="container-fluid">
                <div>
                    <a id="modalActivate" data-toggle="modal" data-target="#InsertModal" class="btn light-blue darken-3 waves-effect"><i class="far fa-plus-square" aria-hidden="true"></i> AGREGAR</a>
                </div>
                <?php require_once RUTA_APP . '/views/modals/modalInsert.php'; ?>
                    <form class="text-center p-5" id="InsertCita" method="POST">
                        <p class="h4 mb-4">NUEVA CITA</p>
                        <div class="md-form form-sm">
                            <input type="text" name="fecha" value="" id="fecha" class="form-control datepicker fechadatepicker"  required>
                            <label for="form8" class="active">Fecha de Cita:</label>
                        </div>
                        <div class="md-form form-sm">
                            <input type="text" name="hora" value="" id="hora" class="form-control timepicker" required>
                            <label for="form8" class="active">Hora de Cita:</label>
                        </div>
                        <div class="md-form form-sm">
                            <input type="text" name="asunto" id="asunto" class="form-control" required>
                            <label for="form8" class="active">Asunto:</label>
                        </div>
                        <div class="md-form form-sm">
                            <select name="paciente" id="paciente" class="form-control" searchable="Busca Aqui.." required>
                                <option value="" selected disabled>Seleccione un Paciente</option>
                                <?php  foreach ($datos['paciente'] as $paciente) : ?>
                                    <option value="<?php echo $paciente->id_paciente; ?>"><?php echo strtoupper($paciente->nombre_paciente)." ".strtoupper($paciente->app_paciente)." ".strtoupper($paciente->apm_paciente); ?></option>
                                <?php endforeach;?>
                            </select>
                            <label for="form8" class="active">Paciente:</label>
                        </div>
                        <div class="md-form form-sm">
                            <select name="doctor" id="doctor" class="form-control" searchable="Busca Aqui.." required>
                                <option value="" selected disabled>Seleccione un Doctor</option>
                                <?php  foreach ($datos['doctor'] as $doctor) : ?>
                                    <option value="<?php echo $doctor->id_doctor; ?>"><?php echo strtoupper($doctor->nombre_doctor)." ".strtoupper($doctor->app_doctor)." ".strtoupper($doctor->apm_doctor); ?></option>
                                <?php endforeach;?>
                            </select>
                            <label for="form8" class="active">Paciente:</label>
                        </div>
                        <button class="btn btn-outline-primary btn-block" type="submit">Enviar</button>
                    </form>
                <?php require_once RUTA_APP . '/views/modals/modalF.php'; ?>
                <br />
                <div class="table-responsive">
                    <table id="dtCitaExample" class="table table-striped table-bordered dt-responsive nowrap" width="100%">
                        <thead>
                            <tr>
                                <th class="th-sm">ACCIONES</th>
                                <th class="th-sm">FECHA</th>
                                <th class="th-sm">HORA</th>
                                <!--<th class="th-sm">TURNO</th>-->
                                <th class="th-sm">ASUNTO</th>
                                <th class="th-sm">PACIENTE</th>
                                <th class="th-sm">DOCTOR</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                    <?php require_once RUTA_APP . '/views/modals/modalUpdate.php'; ?>
                        <form id="UpdateCita" class="text-center p-5" method="POST">
                            <p class="h4 mb-4">DOCTOR</p>
                            <div class="md-form form-sm">
                                <input type="text" id="formId" value=" " class="form-control" hidden>
                                <input type="text" name="fecha" value="" id="formFecha" class="form-control datepicker fechadatepicker"  required>
                                <label for="form8" class="active">Fecha de Cita:</label>
                            </div>
                            <div class="md-form form-sm">
                                <input type="text" name="hora" value="" id="formHora" class="form-control timepicker" required>
                                <label for="form8" class="active">Hora de Cita:</label>
                            </div>
                            <!--<div class="md-form form-sm">
                                <input type="text" name="turno" id="formTurno" class="form-control" required>
                                <label for="form8" class="active">Turno:</label>
                            </div>-->
                            <div class="md-form form-sm">
                                <input type="text" name="asunto" id="formAsunto" class="form-control" required>
                                <label for="form8" class="active">Asunto:</label>
                            </div>
                            <div class="md-form form-sm">
                            <select name="paciente" id="formPaciente" class="form-control" searchable="Busca Aqui.." required>
                                <option value="" selected disabled>Seleccione un Paciente</option>
                                <?php  foreach ($datos['paciente'] as $paciente) : ?>
                                    <option value="<?php echo $paciente->id_paciente; ?>"><?php echo strtoupper($paciente->nombre_paciente)." ".strtoupper($paciente->app_paciente)." ".strtoupper($paciente->apm_paciente); ?></option>
                                <?php endforeach;?>
                            </select>
                            <label for="form8" class="active">Paciente:</label>
                        </div>
                        <div class="md-form form-sm">
                            <select name="doctor" id="formDoctor" class="form-control" searchable="Busca Aqui.." required>
                                <option value="" selected disabled>Seleccione un Doctor</option>
                                <?php  foreach ($datos['doctor'] as $doctor) : ?>
                                    <option value="<?php echo $doctor->id_doctor; ?>"><?php echo strtoupper($doctor->nombre_doctor)." ".strtoupper($doctor->app_doctor)." ".strtoupper($doctor->apm_doctor); ?></option>
                                <?php endforeach;?>
                            </select>
                            <label for="form8" class="active">Paciente:</label>
                        </div>
                            <button class="btn btn-outline-warning btn-block" type="submit">Enviar</button>
                        </form>
                        <?php require_once RUTA_APP . '/views/modals/modalF.php'; ?>
                    </div>  
                    <!-- Funciones Scripts-->
                    <script language="JavaScript" type="text/javascript" src="<?php echo RUTA_URL ?>/js/pages/cita.js"></script>
                </div>  
<?php require_once RUTA_APP . '/views/inc/footer.php'; ?>