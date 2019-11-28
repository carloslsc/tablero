<?php require_once RUTA_APP . '/views/inc/header.php'; ?>
<div class="view view-cascade gradient-card-header red accent-4 narrower py-2 mx-4 mb-3 d-flex justify-content-between align-items-center">
                    <div></div>
                    <a href="#" class="white-text mx-3">CITAS SIN CONFIRMAR</a>
                    <div></div>
                </div>
                    <table id="dtTurnoExample" class="table table-striped table-bordered dt-responsive nowrap display" style="width:100%">
                        <thead>
                            <tr>
                                <th class="th-sm">ACCIONES
                                </th>
                                <th class="th-sm">FECHA
                                </th>
                                <th class="th-sm">HORA
                                </th>
                                <th class="th-sm">ASUNTO
                                </th>
                                <th class="th-sm">PACIENTE
                                </th>
                                <th class="th-sm">DOCTOR
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php  foreach ($datos['cita'] as $cita) : ?>
                            <tr>
                                <td>
                                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                        <div class="btn-group mr-2 white-text" role="group" aria-label="First group">
                                            <!--<a id="UpdateCitaModal" data-toggle="modal" onclick="UpdateCita(<?php echo $doctor->id_cita; ?>)" data-target="#UpdateModal" class="btn-sm amber darken-1"><i class="fas fa-edit" aria-hidden="true"></i></a>
                                            <a id="DeleteCitaModal" onclick="DeleteCita(<?php echo $cita->id_cita; ?>)" class="btn-sm red darken-1" data-toggle="modal" data-target="#modalConfirmDelete"><i class="fas fa-trash" aria-hidden="true"></i></a>-->
                                            <a id="ConfirmCitaModal" data-toggle="modal" onclick="ConfirmCita(<?php echo $cita->id_cita; ?>)" data-target="#ConfirmModal" class="btn-sm green darken-1"><i class="fas fa-check" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </td>
                                <td id="fecha<?php echo $cita->id_cita; ?>"><?php echo strtoupper($cita->fecha_cita); ?></td>
                                <td id="hora<?php echo $cita->id_cita; ?>"><?php echo strtoupper($cita->hora_cita); ?></td>
                                <td id="asunto<?php echo $cita->id_cita; ?>"><?php echo strtoupper($cita->asunto_cita); ?></td>
                                <td id="paciente<?php echo $cita->id_cita; ?>"><?php echo strtoupper($cita->nombre_paciente)." ".strtoupper($cita->app_paciente)." ".strtoupper($cita->apm_paciente); ?></td>
                                <td id="doctor<?php echo $cita->id_cita; ?>"><?php echo strtoupper($cita->nombre_doctor)." ".strtoupper($cita->app_doctor)." ".strtoupper($cita->apm_doctor); ?></td>
                            </tr>
                            <?php endforeach;?>
                        </tbody>
                    </table>
                <div class="view view-cascade gradient-card-header red accent-4 narrower py-2 mx-4 mb-3 d-flex justify-content-between align-items-center">
                    <div></div>
                    <a href="#" class="white-text mx-3">TURNO ACTUAL</a>
                    <div></div>
                </div>
                    <table id="dtTurnoVigenteExample" class="table table-striped table-bordered dt-responsive nowrap display" style="width:100%">
                        <thead>
                            <tr>
                                <th class="th-sm">TURNO
                                </th>
                                <th class="th-sm">PACIENTE
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                    <div class="row">
                        <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div class="form-group">
                                <button id="ReiniciarBoton" style="width:100%;" onclick="Reiniciar()" class="btn unique-color waves-effect"><i class="fas fa-redo" aria-hidden="true"></i> REINICIAR TABLA</button>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <button id="ComenzarBoton" style="width:100%;" onclick="Comenzar()" class="btn success-color waves-effect" type="submit"><i class="fas fa-play" aria-hidden="true"></i> COMENZAR TABLA</button>
                        </div>
                        <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div class="form-group">
                                <button id="AtrasBoton" style="width:100%;" onclick="Atras()" class="btn danger-color waves-effect"><i class="fas fa-arrow-left" aria-hidden="true"></i> ATRAS</button>
                            </div>    
                        </div>
                        <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div class="form-group">
                                <button data-dismiss="toast" id="SiguienteBoton" style="width:100%;" onclick="Siguiente()" class="btn primary-color waves-effect"><i class="fas fa-arrow-right" aria-hidden="true"></i> SIGUIENTE</button>   
                            </div>    
                        </div>
                    </div>
                    <div class="view view-cascade gradient-card-header red accent-4 narrower py-2 mx-4 mb-3 d-flex justify-content-between align-items-center">
                        <div></div>
                        <a href="#" class="white-text mx-3">CITAS CONFIRMADAS</a>
                        <div></div>
                    </div>
                    <table id="dtTurnoHoyExample" class="table table-striped table-bordered dt-responsive nowrap display" style="width:100%">
                        <thead>
                            <tr>
                                <th class="th-sm">ACCIONES</th>
                                <th class="th-sm">FECHA</th>
                                <th class="th-sm">HORA</th>
                                <th class="th-sm">ASUNTO</th>
                                <th class="th-sm">PACIENTE</th>
                                <th class="th-sm">DOCTOR</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php  foreach ($datos['citaConfirm'] as $cita) : ?>
                            <tr>
                                <td>
                                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                        <div class="btn-group mr-2 white-text" role="group" aria-label="First group">
                                            <a id="DeleteCitaModal" data-toggle="modal" onclick="DeleteCita(<?php echo $cita->id_cita; ?>)" data-target="#DeleteModal" class="btn-sm red darken-1"><i class="fas fa-trash" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </td>
                                <td id="fecha<?php echo $cita->id_cita; ?>"><?php echo strtoupper($cita->fecha_cita); ?></td>
                                <td id="hora<?php echo $cita->id_cita; ?>"><?php echo strtoupper($cita->hora_cita); ?></td>
                                <td id="asunto<?php echo $cita->id_cita; ?>"><?php echo strtoupper($cita->asunto_cita); ?></td>
                                <td id="paciente<?php echo $cita->id_cita; ?>"><?php echo strtoupper($cita->nombre_paciente)." ".strtoupper($cita->app_paciente)." ".strtoupper($cita->apm_paciente); ?></td>
                                <td id="doctor<?php echo $cita->id_cita; ?>"><?php echo strtoupper($cita->nombre_doctor)." ".strtoupper($cita->app_doctor)." ".strtoupper($cita->apm_doctor); ?></td>
                            </tr>
                            <?php endforeach;?>
                        </tbody>
                    </table>
                    <script language="JavaScript" type="text/javascript" src="<?php echo RUTA_URL ?>/js/pages/turno.js"></script>
<?php require_once RUTA_APP . '/views/inc/footer.php'; ?>