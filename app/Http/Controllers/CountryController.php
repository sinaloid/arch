<?php

namespace App\Http\Controllers;

use App\Models\Countries\Country;
use App\Models\Countries\Region;
use App\Models\Countries\Province;
use App\Models\Countries\Commune;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class CountryController extends Controller
{
    public function createCountry()
    {
        /*Pays*/
            
            $countries = ["Burkina Faso"];
            $this->countryConfig($countries, 226, 1);

        /*regions*/

            $regions = ["Boucle du Mouhoun","Cascades","Centre","Centre-Est","Centre-Nord","Centre-Ouest","Centre-Sud","Est","Hauts Bassins","Nord","Plateau Central","Sahel","Sud-Ouest"];
            $this->countryConfig($regions, 1, 2);

        /*Province */

            $mouhoune = ["Balé","Banwa","Kossi","Mouhoun","Nayala","Sourou"];
            $this->countryConfig($mouhoune, 1, 3);

            $cascades = ["Comoé","Léraba"];
            $this->countryConfig($cascades, 2, 3);

            $centre = ["Kadiogo"];
            $this->countryConfig($centre, 3, 3);

            $centreEst = ["Boulgou","Koulpélogo","Kouritenga"];
            $this->countryConfig($centreEst, 4, 3);

            $centreNord = [ "Bam","Namentenga","Sanmatenga"];
            $this->countryConfig($centreNord, 5, 3);

            $centreOuest = ["Boulkiemdé","Sanguié","Sissili","Ziro"];
            $this->countryConfig($centreOuest, 6, 3);

            $centreSud = ["Bazéga","Nahouri","Zoundwéogo"];
            $this->countryConfig($centreSud, 7, 3);

            $est = ["Gnagna","Gourma","Komandjoari","Kompienga","Tapoa"];
            $this->countryConfig($est, 8, 3);

            $haut = ["Houet","Kénédougou","Tuy"];
            $this->countryConfig($haut, 9, 3);

            $nord = ["Loroum","Passoré","Yatenga","Zondoma"];
            $this->countryConfig($nord, 10, 3);

            $plateau = ["Ganzourgou","Kourwéogo","Oubritenga"];
            $this->countryConfig($plateau, 11, 3);

            $sahel = ["Oudalan","Séno","Soum","Yagha"];
            $this->countryConfig($sahel, 12, 3);

            $sudOuest = ["Bougouriba","Ioba","Noumbiel","Poni"];
            $this->countryConfig($sudOuest, 13, 3);


        /*Commune*/
        /*1*/
            $bale = ["Bagassi","Bana","Boromo","Fara","Oury","Pâ","Pompoï","Poura","Siby","Yaho"];
            $this->countryConfig($bale, 1, 4);

            $banwa = ["Balavé","Kouka","Sami","Sanaba","Solenzo","Tansila"];
            $this->countryConfig($banwa, 2, 4);

            $kossi = ["Barani","Bomborokuy","Bourasso","Djibasso","Dokuy","Doumbala","Kombori","Madouba","Nouna","Sono"];
            $this->countryConfig($kossi, 3, 4);

            $mouhoun = ["Bondokuy","Dédougou","Douroula","Kona","Ouarkoye","Safané","Tchériba"];
            $this->countryConfig($mouhoun, 4, 4);

            $nayala = ["Gassan","Gossina","Kougny","Toma","Yaba","Yé"];
            $this->countryConfig($nayala, 5, 4);

            $Sourou = ["Di","Gomboro","Kassoum","Kiembara","Lanfièra","Lankoué","Toéni","Tougan"];
            $this->countryConfig($Sourou, 6, 4);

        /*2*/
            $Comoe = ["Banfora","Bérégadougou","Mangodara","Moussodougou","Niangoloko","Ouo","Sidéradougou","Soubakaniédougou","Tiéfora"];
            $this->countryConfig($Comoe, 7, 4);

            $Leraba = ["Dakoro","Douna","Kankalaba","Loumana","Niankorodougou","Ouéléni","Sindou","Wolonkoto"];
            $this->countryConfig($Leraba, 8, 4);

        /*3*/
            $Kadiogo = ["Komki-Ipala","Komsilga","Koubri","Ouagadougou","Pabré","Saaba","Tanghin-Dassouri"];
            $this->countryConfig($Kadiogo, 9, 4);

        /*4*/
            $Boulgou = ["Bagré","Bané","Béguédo","Bissiga","Bittou","Boussouma","Garango","Komtoèga","Niaogho","Tenkodogo","Zabré","Zoaga","Zonsé"];
            $this->countryConfig($Boulgou, 10, 4);

            $Koulpelogo = ["Comin-Yanga","Dourtenga","Lalgaye","Ouargaye","Sangha (Sanga)","Soudougui","Yargatenga","Yondé"];
            $this->countryConfig($Koulpelogo, 11, 4);

            $Kouritenga = ["Andemtenga","Baskouré","Dialgaye","Gounghin","Kando (Cando)","Koupéla","Pouytenga","Tensobentenga (Tansobentenga)","Yargo"];
            $this->countryConfig($Kouritenga, 12, 4);

        /*5*/
            $Bam = ["Bourzanga","Guibaré","Kongoussi","Nasséré","Rollo","Rouko","Sabcé","Tikaré","Zimtanga"];
            $this->countryConfig($Bam, 13, 4);

            $Namentenga = ["Boala","Boulsa","Bouroum","Dargo","Nagbingou","Tougouri","Yalgo","Zéguédéguin"];
            $this->countryConfig($Namentenga, 14, 4);

            $Sanmatenga = ["Barsalogho","Boussouma","Dablo","Kaya","Korsimoro","Mané","Namissiguima","Pensa","Pibaoré","Pissila","Ziga"];
            $this->countryConfig($Sanmatenga, 15, 4);

       /*6*/
            $Boulkiemde = ["Bingo","Imasgo","Kindi","Kokologho","Koudougou","Nandiala","Nanoro","Pella","Poa","Ramongo","Sabou","Siglé","Soaw","Sourgou","Thyou"];
            $this->countryConfig($Boulkiemde, 16, 4);

            $Sanguie = ["Dassa","Didyr","Godyr","Kordié","Kyon","Pouni","Réo","Ténado","Zamo","Zawara"];
            $this->countryConfig($Sanguie, 17, 4);

            $sissili = ["Biéha","Boura","Léo","Nébiélianayou","Niabouri","Silly","Tô"];
            $this->countryConfig($sissili, 18, 4);

            $ziro = ["Bakata","Bougnounou","Cassou","Dalo","Gao","Sapouy"];
            $this->countryConfig($ziro, 19, 4);

        /*7*/
            $Bazega = ["Doulougou","Gaongo","Ipelcé","Kayao","Kombissiri","Saponé","Toécé"];
            $this->countryConfig($Bazega, 20, 4);

            $Nahouri = ["Guiaro","Pô","Tiébélé","Zecco","Ziou"];
            $this->countryConfig($Nahouri, 21, 4);

            $Zoundweogo = ["Béré","Bindé","Gogo","Gomboussougou","Guiba","Manga","Nobéré"];
            $this->countryConfig($Zoundweogo, 22, 4);

        /*8*/
            $Gnagna = ["Bilanga","Bogandé","Coalla","Liptougou","Manni","Piéla","Thion"];
            $this->countryConfig($Gnagna, 23, 4);

            $Gourma = ["Diabo","Diapangou","Fada N’Gourma","Matiacoali","Tibga","Yamba"];
            $this->countryConfig($Gourma, 24, 4);

            $Komondjari = ["Bartiébougou","Foutouri","Gayéri"];
            $this->countryConfig($Komondjari, 25, 4);

            $Kompienga = ["Kompienga","Madjoari","Pama"];
            $this->countryConfig($Kompienga, 26, 4);

            $Tapoa = ["Botou","Diapaga","Kantchari","Logobou","Namounou","Partiaga","Tambaga","Tansarga"];
            $this->countryConfig($Tapoa, 27, 4);

        /*9*/
            $Houet = ["Bama","Bobo-Dioulasso","Dandé","Faramana","Fô","Karangasso-Sambla","Karangasso-Vigué","Koundougou","Léna","Padéma","Péni","Satiri","Toussiana"];
            $this->countryConfig($Houet, 28, 4);

            $Kenedougou = ["Banzon","Djigouéra","Kangala","Kayan","Koloko","Kourignon","Kourouma","Morolaba","N’dorola","Orodara","Samogohiri","Samorogouan","Sindo"];
            $this->countryConfig($Kenedougou, 29, 4);

            $Tuy = ["Békuy","Béréba","Boni","Founzan","Houndé","Koti","Koumbia"];
            $this->countryConfig($Tuy, 30, 4);

        /*10*/
            $Loroum = ["Banh","Ouindigui","Sollé","Titao"];
            $this->countryConfig($Loroum, 31, 4);

            $Passore = ["Arbollé","Bagaré","Bokin","Gomponsom","Kirsi","Lâ-Todin","Pilimpikou","Samba","Yako"];
            $this->countryConfig($Passore, 32, 4);

            $Yatenga = ["Barga","Kaïn","Kalsaka","Kossouka","Koumbri","Namissiguima","Ouahigouya","Oula","Rambo","Séguénéga","Tangaye","Thiou","Zogoré"];
            $this->countryConfig($Yatenga, 33, 4);

            $Zondoma = ["Bassi","Boussou","Gourcy","Léba","Tougo"];
            $this->countryConfig($Zondoma, 34, 4);

        /*11*/
            $Ganzourgou = ["Boudry","Kogho","Méguet","Mogtédo","Salogo","Zam","Zorgho","Zoungou"];
            $this->countryConfig($Ganzourgou, 35, 4);

            $Kourweogo = ["Boussé","Laye","Niou","Sourgoubila","Toéghin"];
            $this->countryConfig($Kourweogo, 36, 4);

            $Oubritenga = ["Absouya","Dapélogo","Loumbila","Nagréongo","Ourgou-Manèga","Ziniaré","Zitenga"];
            $this->countryConfig($Oubritenga, 37, 4);

        /*12*/
            $Oudalan = ["Déou","Gorom-Gorom","Markoye","Oursi","Tin-Akoff"];
            $this->countryConfig($Oudalan, 38, 4);

            $Seno = ["Bani","Dori","Falangountou","Gorgadji","Sampelga","Seytenga"];
            $this->countryConfig($Seno, 39, 4);

            $Soum = ["Arbinda","Baraboulé","Djibo","Diguel","Kelbo","Koutougou","Nassoumbou","Pobé-Mengao","Tongomayel"];
            $this->countryConfig($Soum, 40, 4);

            $Yagha = ["Boundoré","Mansila","Sebba","Solhan","Tankougounadié","Titabé"];
            $this->countryConfig($Yagha, 41, 4);

        /*13*/
            $Bougouriba = ["Bondigui","Diébougou","Dolo","Nioronioro","Tiankoura"];
            $this->countryConfig($Bougouriba, 42, 4);

            $Ioba = ["Dano","Dissin","Guéguéré","Koper","Niégo","Oronkua","Ouessa","Zambo"];
            $this->countryConfig($Ioba, 43, 4);
            
            $Noumbiel = ["Batié","Boussoukoula","Kpuéré","Legmoin","Midébdo"];
            $this->countryConfig($Noumbiel, 44, 4);

            $Poni = ["Bouroum-Bouroum","Bousséra","Djigoué","Gaoua","Gbomblora","Kampti","Loropéni","Malba","Nako","Périgban"];
            $this->countryConfig($Poni, 45, 4);



        
        
        
        
       /* $data = new GData();
        $data->id_data = 21;
        $data->slug = "str";
        $data->année = "2020";

        $budget = new GBudget();
        $budget->depenseInvest = 25555;
        $budget->recetInvest = 25555;
        $budget->depenseFonct = 25555;
        $budget->recetFonct = 25555;

        $budgetn = new GBudgetn();
        $budgetn->depenseInvestN = 25555;
        $budgetn->recetInvestN = 25555;
        $budgetn->depenseFonctN = 25555;
        $budgetn->recetFonctN = 25555;

       

        $infog = new GInfog();
        $infog->depense = 55555;
        $infog->dixMeilleur = 55555;
        $infog->domaineCivil = 55555;
        $infog->etatCivil = new EtatCivil();
        $infog->etatCivil->etatNombre = new EtatNombre();
        $infog->etatCivil->observation = new Observation();
        $infog->partenaire = 55555;
        $infog->recette = 55555;
        $infog->ressourceImage = 55555;
        $infog->troisMeilleur = 55555;
        
        $data->infog = $infog;
        $data->budget = $budget;
        $data->budgetn = $budgetn;
        $JsonObject = json_encode($data);
        
        dd(
            $JsonObject
        );*/
        return "OK";//view('test');
    }

    public function countryConfig($names, $id, $table){
        if($table == 1 ){
            /*Pays*/
            foreach($names as $name){
                Country::create(['country_name' => $name, 'indicatif' => $id, 'slug' => Str::slug($name)]);
                if($id == 226) $id = 225;
                if($id == 225) $id = 223;
            }
        }
        elseif($table == 2) {
            /*Region*/
            foreach($names as $name){
                Region::create(['region_name' => $name,'country_id' => $id,'slug' => Str::slug($name)]);
            }
        } elseif($table == 3){
            /*Province*/
            foreach($names as $name){
                Province::create(['province_name' => $name, 'region_id'=> $id, 'slug' => Str::slug($name)]);
            }
        } else {
            /*Commune */
            foreach($names as $name){
                Commune::create(['commune_name' => $name, 'province_id' => $id,'slug' => Str::slug($name)]);
            }
        }
    }

    public function index()
    {
        $communes = Commune::orderBy('commune_name', 'asc')->get();
        return response()->json(['communes' => $communes], 200);
    }

    public function show($id)
    {
        //$maison = Maison::find($id);
        $commune = Commune::find($id);
        if ($commune) {
            return response()->json(['commune' => $commune], 200);
        } else {
            return response()->json(['error' => 'Commune non trouvée.'], 404);
        }
    }

    public function store(Request $request)
    {
       
    }

    public function update(Request $request, $id)
    {

    }

    // Supprimer une catégorie de maison existante
    public function destroy($id)
    {
        // Trouver la catégorie de maison à supprimer
        /*$maison = Maison::find($id);
        if (!$maison) {
            return response()->json(['message' => 'Maison non trouvée'], 404);
        }

        // Supprimer la catégorie de maison
        $maison->delete();

        return response()->json(['message' => 'Maison supprimée avec succès']);*/
    }
}
