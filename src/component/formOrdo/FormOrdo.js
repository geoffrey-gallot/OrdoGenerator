import "./FormOrdo.css";

import React, { useEffect, useState, useRef, forwardRef } from "react";
import Select from "react-select";
import ReactToPrint from "react-to-print";
import Ordo from "../ordo/Ordo";

// import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

// import ReactDOMServer from "react-dom/server";

const FormOrdo = () => {
  const componentRef = useRef(null);
  const [selectChapter, setSelectChapter] = useState();
  const [selectArticle, setSelectArticle] = useState();
  const [chapitre, setChapitre] = useState([
    { label: "", value: 0 },
    { label: "Soins de pratique courante", value: 1 },
    { label: "Soins spécialisés", value: 2 },
  ]);

  const [articleChapitre1, setArticleChapitre1] = useState([
    { label: "Prélèvements et injections", value: 1 },
    { label: "Pansements courants", value: 2 },
    {
      label:
        "Pansements lourds et complexes nécessitant des conditions d’asepsie rigoureuse",
      value: 3,
    },
    { label: "Pose de sonde et alimentation", value: 4 },
    { label: "Soins portant sur l’appareil respiratoire", value: 5 },
    { label: "Soins portant sur l’appareil génito- urinaire", value: 6 },
    { label: "Soins portant sur l’appareil digestif", value: 7 },
    { label: "Test et soins portant sur l’enveloppe cutanée", value: 8 },
    { label: "Perfusions", value: 9 },
    { label: "Surveillance et observation d’un patient à domicile", value: 10 },
    {
      label:
        "Soins infirmiers à domicile pour un patient, quel que soit son âge, en situation de dépendance temporaire ou permanente",
      value: 11,
    },
    { label: "Garde à domicile", value: 12 },
  ]);

  const [articleChapitre2, setArticleChapitre2] = useState([
    { label: "Soins d’entretien des cathéters", value: 1 },
    { label: "Injections et prélèvements", value: 2 },
    { label: "Perfusions", value: 3 },
    {
      label:
        "Actes du traitement spécifique à domicile d’un patient immunodéprimé ou cancéreux",
      value: 4,
    },
    // {
    //   label:
    //     "Traitement à domicile d’un patient atteint de mucoviscidose par perfusion d’antibiotiques sous surveillance continue selon le protocole thérapeutique rédigé par un des médecins de l’équipe soignant le patient ",
    //   value: 5,
    // },
    // {
    //   label: "Prise en charge à domicile d’un patient insulino-traité",
    //   value: 6,
    // },
    // { label: "Prise en charge spécialisée", value: 7 },
    { label: "Soins portant sur l’appareil digestif et urinaire", value: 8 },
  ]);

  const [actionChapitre1Article1, setActionChapitre1Article1] = useState([
    { label: "", value: 0 },
    { label: "Prélèvement par ponction veineuse directe", value: 1 },
    { label: "Saignée", value: 2 },
    {
      label:
        "Prélèvement aseptique cutané ou de secrétions muqueuses, prélèvement de selles ou d’urine pour examen cytologiques, bactériologiques, mycologiques, virologiques ou parasitologiques",
      value: 3,
    },
    { label: "Injection intraveineuse directe isolée", value: 4 },
    { label: "Injection intraveineuse directe en série", value: 5 },
    {
      label: "Injection intraveineuse directe chez un enfant de moins de 5 ans",
      value: 6,
    },
    { label: "Injection intramusculaire", value: 7 },
    {
      label:
        "Injection d'un sérum d'origine humaine ou animal selon la méthode de Besredka, y compris la surveillance",
      value: 8,
    },

    { label: "Injection sous-cutanée", value: 9 },
    { label: "Injection intradermique", value: 10 },
    {
      label:
        "Injection d'un ou plusieurs allergènes, poursuivant un traitement d'hyposensibilisation spécifique, selon le protocole écrit, y compris la surveillance, la tenue du dossier de soins, la transmission des informations au médecin prescripteur",
      value: 11,
    },

    { label: "Injection d'un implant sous-cutané", value: 12 },
    { label: "Injection en goutte à goutte par voie rectale", value: 13 },
  ]);

  const [actionChapitre1Article2, setActionChapitre1Article2] = useState([
    { label: "", value: 0 },
    { label: "Pansement de stomie", value: 1 },
    {
      label:
        "Pansement de trachéotomie, y compris l'aspiration et l'éventuel changement de canule ou sonde",
      value: 2,
    },
    {
      label:
        "Ablation de fils ou d'agrafes, dix ou moins, y compris le pansement éventuel",
      value: 3,
    },
    {
      label:
        "Ablation de fils ou d'agrafes, dix, y compris le pansement éventuel",
      value: 4,
    },
    { label: "Autre pansement", value: 5 },
  ]);

  const [actionChapitre1Article3, setActionChapitre1Article3] = useState([
    { label: "", value: 0 },
    {
      label:
        "Pansements de brûlure étendue ou de plaie chimique ou thermique étendue, sur une surface supérieure à 5 % de la surface corporelle",
      value: 1,
    },
    {
      label:
        "Pansement d'ulcère étendu ou de greffe cutanée, sur une surface supérieur à 60 cm2",
      value: 2,
    },
    {
      label:
        "Pansement d'amputation nécessitant détersion, épluchage et régularisation",
      value: 3,
    },
    { label: "Pansement de fistule digestive", value: 4 },
    {
      label:
        "Pansement pour pertes de substance traumatique ou néo-plastique, avec lésions profondes, sous aponévrotiques, musculaires, tendineuses ou osseuses",
      value: 5,
    },
    {
      label: "Pansement chirurgical nécessitant un méchage ou une irrigation",
      value: 6,
    },
    {
      label:
        "Pansement d'escarre profonde et étendue atteignant les muscles ou les tendons",
      value: 7,
    },
    {
      label: "Pansement chirurgical avec matériel d'ostéosynthèse extériorisé",
      value: 8,
    },
  ]);
  const [actionChapitre1Article4, setActionChapitre1Article4] = useState([
    { label: "", value: 0 },
    { label: "Pose de sonde gastrique", value: 1 },
    {
      label:
        "Alimentation entérale par gavage ou en déclive ou par nutri-pompe, y compris la surveillance, par séance",
      value: 2,
    },
    {
      label:
        "Alimentation entérale par voie jéjunale avec sondage de la stomie, y compris le pansement et la surveillance, par séance",
      value: 3,
    },
  ]);
  const [actionChapitre1Article5, setActionChapitre1Article5] = useState([
    { label: "", value: 0 },
    { label: "Séance d'aérosol", value: 1 },
    { label: "Lavage d'un sinus", value: 2 },
  ]);
  const [actionChapitre1Article6, setActionChapitre1Article6] = useState([
    { label: "", value: 0 },
    { label: "Injection vaginale", value: 1 },
    {
      label:
        "Soins gynécologiques au décours immédiat d'un traitement par curiethérapie",
      value: 2,
    },
    { label: "Cathétérisme urétral chez la femme", value: 3 },
    { label: "Cathétérisme urétral chez l'homme ", value: 4 },
    { label: "Changement de sonde urinaire à demeure chez la femme", value: 5 },
    { label: "Changement de sonde urinaire à demeure chez l'homme", value: 6 },
    {
      label:
        "Education à l'auto sondage comprenant le sondage éventuel, avec un maximum de dix séances",
      value: 7,
    },
    {
      label:
        "Réadaptation de vessie neurologique comprenant le sondage éventuel",
      value: 8,
    },
    { label: "Instillation et/ou lavage vésical (sonde en place)", value: 9 },
    {
      label: "Pose isolée d'un étui pénien, une fois par vingt-quatre heures",
      value: 10,
    },
  ]);
  const [actionChapitre1Article7, setActionChapitre1Article7] = useState([
    { label: "", value: 0 },
    {
      label:
        "Soins de bouches avec application de produits médicamenteux au décours immédiat d'une radiothérapie",
      value: 1,
    },
    { label: "Lavement évacuateur ou médicamenteux", value: 2 },
    {
      label: "Extraction de fécalome ou extraction manuelle des selles",
      value: 3,
    },
  ]);
  const [actionChapitre1Article8, setActionChapitre1Article8] = useState([
    { label: "", value: 0 },
    { label: "Pulvérisation de produit(s) médicamenteux", value: 1 },
    { label: "Réalisation de test tuberculine", value: 2 },
    {
      label:
        "Lecture d'un timbre tubercullinique et transmission d'informations au médecin prescripteur",
      value: 3,
    },
  ]);
  const [actionChapitre1Article9, setActionChapitre1Article9] = useState([
    { label: "Article supprimé par décision Uncam du 21/07/14", value: 0 },
  ]);
  const [actionChapitre1Article10, setActionChapitre1Article10] = useState([
    { label: "", value: 0 },
    {
      label:
        "Administration et surveillance d'une thérapeutique orale au domicile (1) des patients présentant des troubles psychiatriques avec établissement d'une fiche de surveillance, par passage",
      value: 1,
    },
    { label: "Au-delà du 1er mois, par passage", value: 2 },
    {
      label:
        "Surveillance et observation d'un patient lors de la mise en œuvre d'un traitement ou lors de la modification de celui-ci, sauf pour les patients diabétiques insulino￾dépendants, avec établissement d'une fiche de surveillance, avec un maximum de quinze jours, par jour",
      value: 3,
    },
  ]);
  const [actionChapitre1Article11, setActionChapitre1Article11] = useState([]);

  const placeholderArcticle12Chap1 =
    "Garde d'un malade à domicile, nécessitant une surveillance constante et exclusive et des soins infirmiers répétés, y compris les soins d'hygiène, effectuée selon un protocole écrit Par période de six heures";
  const [actionChapitre1Article12, setActionChapitre1Article12] = useState([
    { label: "", value: 0 },
    { label: "entre 8 heures et 20 heures ", value: 1 },
    { label: "entre 20 heures et 8 heures ", value: 2 },
  ]);

  const placeholderArcticle1Chap2 =
    "Séance d'entretien de cathéter(s) en dehors des perfusions, y compris le pansement :";
  const [actionChapitre2Article1, setActionChapitre2Article1] = useState([
    { label: "", value: 0 },
    { label: "Cathéter péritonéal", value: 1 },
    {
      label:
        "Cathéter extériorisé ou site implantable ou cathéter veineux central implanté par voie périphérique",
      value: 2,
    },
  ]);

  const [actionChapitre2Article2, setActionChapitre2Article2] = useState([
    { label: "", value: 0 },
    {
      label:
        "Injections d'analgésique(s) à l'exclusion de la première par l'intermédiaire d'un cathéter intrathécal ou péridural",
      value: 1,
    },
    {
      label:
        "Injection intraveineuse par l'intermédiaire d'un site implanté, y compris l'héparinisation et le pansement",
      value: 2,
    },
    {
      label:
        "Injection intraveineuse par l'intermédiaire d'un cathéter central, y compris l'héparinisation et le pansement",
      value: 3,
    },
    {
      label:
        "Prélèvement sanguin sur cathéter veineux central extériorisé ou chambre implantable",
      value: 3,
    },
  ]);

  const [actionChapitre2Article3, setActionChapitre2Article3] = useState([
    { label: "", value: 0 },
    {
      label:
        "Forfait pour séance de perfusion courte, d'une durée inférieure ou égale à une heure, sous surveillance continue",
      value: 1,
    },
    {
      label:
        "Supplément forfaitaire pour surveillance continue d'une perfusion au-delà de la première heure, par heure (avec un maximum de cinq heures)",
      value: 2,
    },
    {
      label:
        "Forfait pour séance de perfusion d'une durée supérieure à une heure, avec organisation d'une surveillance",
      value: 3,
    },
    {
      label:
        "Forfait pour arrêt et retrait du dispositif d'une perfusion, y compris le pansement, la tenue du dossier de soins éventuellement la transmission d'informations nécessaires au médecin prescripteur ; ce forfait ne se cumule pas avec un forfait de perfusion sous surveillance continue",
      value: 4,
    },
    {
      label:
        "Forfait pour l'organisation de la surveillance d'une perfusion, de la planification des soins, y compris la coordination avec les autres professionnels de santé, les prestataires et les services sociaux, à l'exclusion du jour de la pose et de celui du retrait, par jour (ne peuvent être notés, à l'occasion de cet acte, des frais de déplacements ou des majorations de nuit ou de dimanche)",
      value: 5,
    },
    {
      label:
        "Changement de flacon(s) ou branchement en Y sur dispositif en place ou intervention pour débranchement ou déplacement du dispositif ou contrôle du débit, pour une perfusion sans surveillance continue, en dehors de la séance de pose",
      value: 6,
    },
  ]);

  const [actionChapitre2Article4, setActionChapitre2Article4] = useState([
    { label: "", value: 0 },
    { label: "Séance d'aérosols à visée prophylactique", value: 1 },
    { label: "Injection intramusculaire ou sous-cutanée", value: 2 },
    { label: "Injection intraveineuse ", value: 3 },
    {
      label:
        "Injection intraveineuse d'un produit de chimiothérapie anticancéreuse",
      value: 4,
    },
  ]);
  const [actionChapitre2Article5, setActionChapitre2Article5] = useState([
    { label: "", value: 0 },
  ]);
  const [actionChapitre2Article6, setActionChapitre2Article6] = useState([
    { label: "", value: 0 },
  ]);
  const [actionChapitre2Article7, setActionChapitre2Article7] = useState([
    { label: "", value: 0 },
  ]);

  const [cycleur, setCycleur] = useState();
  const [actionChapitre2Article8, setActionChapitre2Article8] = useState([
    { label: "", value: 0 },
    {
      label:
        "Irrigation colique dans les suites immédiates d'une stomie définitive, incluant le pansement et la surveillance de l'évacuation, avec un maximum de 24 séances",
      value: 1,
    },
    {
      label: "Dialyse péritonéale avec un maximum de 4 séances par jour",
      value: 2,
    },
    { label: "Dialyse péritonéale par cycleur ", value: 3 },
  ]);
  const [cycleurTab, setCycleurTab] = useState([
    { label: "", value: 0 },
    { label: "Branchement ou débranchement, par séance", value: 1 },
    {
      label: "Organisation de la surveillance, par période de 12 heures",
      value: 2,
    },
  ]);

  const [value, setValue] = useState();

  const [frequenceType, setFrequenceType] = useState();
  const [frequence, setFrequence] = useState([
    { label: "jour", value: 1 },
    { label: "moi", value: 2 },
  ]);
  const [renouvelable, setRenouvelable] = useState();
  const [nonOuvrable, setNonOuvrable] = useState();

  const [nbrDay, setnbrDay] = useState();
  const [nbrMonth, setnbrMonth] = useState();

  const [domicile, setDomicile] = useState();
  const [act, setAct] = useState();
  const [date, setDate] = useState();

  useEffect(() => {
    // console.log("jsonc", chapitre);
  }, []);

  const [status, setStatus] = useState();

  const exportToPdf = () => {
    console.log("export");
    console.log(nom);
    console.log(prenom);
    console.log(adeli);
    console.log(rpps);
    console.log(adresse);
    console.log(tel);
    console.log("act", act);
    console.log("renouvel", renouvelable);
    console.log("non ouvrable", nonOuvrable);
    console.log("nbr jour", nbrDay);
    console.log("nbr mois", nbrMonth);
    console.log("domicile", domicile);
    console.log("date", date);
  };

  const [nom, setNom] = useState();
  const [prenom, setPrenom] = useState();
  const [adeli, setAdeli] = useState();
  const [rpps, setRpps] = useState();
  const [adresse, setAdresse] = useState();
  const [tel, setTel] = useState();

  // const element = `
  //   <body>
  //     <div>
  //       <p>${act}</p>
  //       <p>${renouvelable}</p>
  //       <p>${nonOuvrable}</p>
  //       <p>${nbrDay}</p>
  //       <p>${nbrMonth}</p>
  //       <p>${domicile}</p>
  //       <p>${date}</p>
  //     </div>
  //   </body>
  // `;
  // const html = ReactDOMServer.renderToStaticMarkup(element);

  return status !== "exportFile" ? (
    <div>
      <div className="entete">
        <div className="name">
          <h3>Nom:</h3>
          <input
            type={"text"}
            onInput={(value) => {
              setNom(value.target.value);
            }}
          />
          <h3>Prenom</h3>
          <input
            type={"text"}
            onInput={(value) => {
              setPrenom(value.target.value);
            }}
          />
        </div>
        <div className="name">
          <h3>Numero ADELI</h3>
          <input
            type={"text"}
            onInput={(value) => {
              setAdeli(value.target.value);
            }}
          />
          <h3>Numero RPPS</h3>
          <input
            type={"text"}
            onInput={(value) => {
              setRpps(value.target.value);
            }}
          />
        </div>

        <h3>Adresse</h3>
        <input
          type={"text"}
          onInput={(value) => {
            setAdresse(value.target.value);
          }}
        />
        <h3>Telephone</h3>
        <input
          type={"tel"}
          onInput={(value) => {
            setTel(value.target.value);
          }}
        />
      </div>

      <h3>Soin</h3>
      <Select
        options={chapitre}
        onChange={(value) => {
          // console.log(value);
          setSelectChapter(value.value);
        }}
      />
      <h3>Type de soin</h3>
      {selectChapter === 1 && (
        <Select
          options={articleChapitre1}
          onChange={(value) => {
            setSelectArticle(value.value);
          }}
        />
      )}
      {selectChapter === 2 && (
        <Select
          options={articleChapitre2}
          onChange={(value) => {
            setSelectArticle(value.value);
          }}
        />
      )}
      <h3>Action</h3>
      {selectChapter === 1 && selectArticle === 1 && (
        <Select
          options={actionChapitre1Article1}
          onChange={(value) => {
            setAct(value.label);
          }}
        />
      )}
      {selectChapter === 1 && selectArticle === 2 && (
        <Select
          options={actionChapitre1Article2}
          onChange={(value) => {
            setAct(value.label);
          }}
        />
      )}
      {selectChapter === 1 && selectArticle === 3 && (
        <Select
          options={actionChapitre1Article3}
          onChange={(value) => {
            setAct(value.label);
          }}
        />
      )}
      {selectChapter === 1 && selectArticle === 4 && (
        <Select
          options={actionChapitre1Article4}
          onChange={(value) => {
            setAct(value.label);
          }}
        />
      )}
      {selectChapter === 1 && selectArticle === 5 && (
        <Select
          options={actionChapitre1Article5}
          onChange={(value) => {
            setAct(value.label);
          }}
        />
      )}
      {selectChapter === 1 && selectArticle === 6 && (
        <Select
          options={actionChapitre1Article6}
          onChange={(value) => {
            setAct(value.label);
          }}
        />
      )}
      {selectChapter === 1 && selectArticle === 7 && (
        <Select
          options={actionChapitre1Article7}
          onChange={(value) => {
            setAct(value.label);
          }}
        />
      )}
      {selectChapter === 1 && selectArticle === 8 && (
        <Select
          options={actionChapitre1Article8}
          onChange={(value) => {
            setAct(value.label);
          }}
        />
      )}
      {selectChapter === 1 && selectArticle === 9 && (
        <Select
          options={actionChapitre1Article9}
          onChange={(value) => {
            setAct(value.label);
          }}
        />
      )}
      {selectChapter === 1 && selectArticle === 10 && (
        <Select
          options={actionChapitre1Article10}
          onChange={(value) => {
            setAct(value.label);
          }}
        />
      )}
      {selectChapter === 1 && selectArticle === 12 && (
        <Select
          options={actionChapitre1Article12}
          onChange={(value) => {
            setAct(value.label);
          }}
          placeholder={placeholderArcticle12Chap1}
        />
      )}

      {selectChapter === 2 && selectArticle === 1 && (
        <Select
          options={actionChapitre2Article1}
          onChange={(value) => {
            setAct(value.label);
          }}
        />
      )}
      {selectChapter === 2 && selectArticle === 2 && (
        <Select
          options={actionChapitre2Article2}
          onChange={(value) => {
            setAct(value.label);
          }}
        />
      )}
      {selectChapter === 2 && selectArticle === 3 && (
        <Select
          options={actionChapitre2Article3}
          onChange={(value) => {
            setAct(value.label);
          }}
        />
      )}
      {selectChapter === 2 && selectArticle === 4 && (
        <Select
          options={actionChapitre2Article4}
          onChange={(value) => {
            setAct(value.label);
          }}
        />
      )}

      {selectChapter === 2 && selectArticle === 8 && (
        <div>
          <Select
            options={actionChapitre2Article8}
            onChange={(value) => {
              setCycleur(value.value);
            }}
          />
          {cycleur === 3 && <Select options={cycleurTab} />}
        </div>
      )}

      <h3>frequence</h3>
      <Select
        options={frequence}
        onChange={(value) => {
          setFrequenceType(value.value);
        }}
      />
      {frequenceType === 1 && (
        <div>
          jours:{" "}
          <input
            type={"number"}
            min={1}
            max={30}
            onInput={(value) => {
              console.log(value.target.value);
              setnbrDay(value.target.value);
            }}
          />
        </div>
      )}
      {frequenceType === 2 && (
        <div>
          mois:{" "}
          <input
            type={"number"}
            min={1}
            max={3}
            onInput={(value) => {
              console.log(value.target.value);
              setnbrMonth(value.target.value);
            }}
          />{" "}
          jours:{" "}
          <input
            type={"number"}
            min={0}
            max={30}
            onInput={(value) => {
              console.log(value.target.value);
              setnbrDay(value.target.value);
            }}
          />
        </div>
      )}
      <h3>Date de debut des soins</h3>
      <input
        type={"date"}
        onInput={(value) => {
          console.log(value.target.value);
          setDate(value.target.value);
        }}
      />
      <h3>renouvelable</h3>
      <Select
        options={[
          { label: "oui", value: 1 },
          { label: "non", value: 2 },
        ]}
        onChange={(value) => {
          setRenouvelable(value.label);
          console.log(value);
        }}
      />
      <Select
        options={[
          { label: "oui", value: 1 },
          { label: "non", value: 2 },
        ]}
        placeholder={"dimanche et jour ferier"}
        onChange={(value) => {
          setNonOuvrable(value.label);
          console.log(value);
        }}
      />
      <Select
        options={[
          { label: "oui", value: 1 },
          { label: "non", value: 2 },
        ]}
        placeholder={"domicile"}
        onChange={(value) => {
          setDomicile(value.label);
          console.log(value);
        }}
      />
      <input
        type={"submit"}
        value={"exporter en pdf"}
        onClick={() => {
          setStatus("exportFile");
          exportToPdf();
        }}
      />
    </div>
  ) : (
    <div>
      <forwardRef>
        <ReactToPrint
          trigger={() => <button>Print this out!</button>}
          content={() => componentRef.current}
        />
        <Ordo
          data={{
            nom: nom,
            prenom: prenom,
            adeli: adeli,
            rpps: rpps,
            adresse: adresse,
            tel: tel,
            act: act,
            domicile: domicile,
            nbrMonth: nbrMonth,
            nbrDay: nbrDay,
            date: date,
          }}
          ref={componentRef}
        />
      </forwardRef>
    </div>
  );
};

export default FormOrdo;
