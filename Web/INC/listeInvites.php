<div class="row text-center">
    <div class="table responsive col-md-6"  text-center" id="formInv" style="display: none">
        <div class="mb-3 transparent" style="max-width: 110rem;">
            <div class="card-header transparent gestionDeCompteSousTitre">Invités</div>
            <div class="card-body transparent">
                    <h5 class="card-title font-weight-bold">Ajouter des invités !</h5>
                    <form class="form-group" id="formAjoutInv" name="formAjoutInv"  method="post" action="validation.html">
                        <div id="errorFormm">Si la personne que vous voulez inviter ne se trouve pas sur notre page veuillez spécifier son mail</div>
                        <input type="text" name="pseudoInv" id="pseudoInv" class="form-control input-sm" placeholder="Nom invité">
                        <input type="submit" value="Ajouter un invité" class="btn btn-primary boutonEvent">
                    </form>
            </div>
        </div>
    </div>
    <div class="col-md-6  text-center" >
        <div class="transparent mb-3" style="max-width: 110rem;">
            <div class="card-header transparent gestionDeCompteSousTitre">Liste des invités</div>
            <div class="card-body transparent">
                <div class="table-responsive" style="max-height: 250px">
                    <table class="table table-striped">
                        <thead style="position: sticky; top: 0;">
                        <tr>
                            <th style="width: 5%" scope="col" class="taillePoliceTitre">#</th>
                            <th style="width: 95%" scope="col" class="taillePoliceTitre">Nom de l'invité</th>
                            <th style="width: 95% ; display: none " id="suppr" scope="col" class="taillePoliceTitre" style="display: none">Supprimer l'invité</th>
                        </tr>
                        </thead>
                        <tbody style="height: 10px !important; overflow: scroll;" id="invites" align="left">
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

