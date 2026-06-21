import { Link } from "react-router-dom";

// Page Conditions Générales de Vente — HelloBad
function CGV() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 text-slate-700">
      {/* En-tête */}
      <div className="mb-10 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold text-slate-900">
          Conditions Générales de Vente
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Dernière mise à jour : X XX XXXXXXXXXX XXXXXXXX
        </p>
      </div>

      <div className="space-y-8 leading-relaxed">
        <Article titre="Article 1 — Objet et champ d'application">
          Les présentes Conditions Générales de Vente (CGV) régissent les ventes
          de produits proposés sur le site HelloBad, accessible à l'adresse
          [URL], entre [RAISON SOCIALE / NOM] et tout client effectuant un achat
          sur le site (ci-après « le Client »). Toute commande implique
          l'acceptation sans réserve des présentes CGV.
        </Article>

        <Article titre="Article 2 — Identité du vendeur">
          <ul className="list-disc space-y-1 pl-5">
            <li>Dénomination : HelloBad</li>
            <li>Forme juridique : Auto-entrepreneur</li>
            <li>Adresse : X XX XXXXXXXXXX XXXXXXXX</li>
            <li>Email : </li>
            <li>SIRET : X XX XXXXXXXXXX XXXXXXXX</li>
            <li>TVA intracommunautaire : X XX XXXXXXXXXX XXXXXXXX</li>
          </ul>
        </Article>

        <Article titre="Article 3 — Produits">
          Les produits proposés à la vente sont décrits avec leurs
          caractéristiques essentielles sur les fiches produits. Les
          photographies sont les plus fidèles possibles mais ne sauraient
          engager le vendeur en cas de légère différence. Les produits sont
          proposés dans la limite des stocks disponibles.
        </Article>

        <Article titre="Article 4 — Prix">
          Les prix sont indiqués en euros, toutes taxes comprises (TTC). [Préciser
          si les frais de livraison sont en sus.] Le vendeur se réserve le droit
          de modifier ses prix à tout moment, étant entendu que le prix appliqué
          est celui en vigueur au moment de la validation de la commande.
        </Article>

        <Article titre="Article 5 — Commande">
          Le Client passe commande via le parcours d'achat du site. La commande
          est validée après acceptation du paiement. Un email de confirmation
          récapitulant la commande est envoyé au Client.
        </Article>

        <Article titre="Article 6 — Paiement">
          Le paiement s'effectue en ligne par carte bancaire via la solution
          sécurisée Stripe. Le débit intervient au moment de la validation de la
          commande. Les données de paiement sont traitées de manière sécurisée
          par le prestataire et ne sont pas conservées par HelloBad.
        </Article>

        <Article titre="Article 7 — Livraison">
          Les produits sont livrés à l'adresse de livraison indiquée par le
          Client lors de la commande.
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Zones de livraison : [À PRÉCISER]</li>
            <li>Délais : [À PRÉCISER]</li>
            <li>Frais de livraison : [À PRÉCISER]</li>
          </ul>
          <span className="mt-2 block">
            Les délais sont donnés à titre indicatif. En cas de retard, le Client
            en est informé.
          </span>
        </Article>

        <Article titre="Article 8 — Droit de rétractation">
          Conformément aux articles L221-18 et suivants du Code de la
          consommation, le Client dispose d'un délai de quatorze (14) jours à
          compter de la réception des produits pour exercer son droit de
          rétractation, sans avoir à justifier de motif. Pour l'exercer, le
          Client notifie sa décision à [EMAIL / ADRESSE]. Les produits doivent
          être retournés dans leur état d'origine. Les frais de retour sont à la
          charge de [À PRÉCISER]. Le remboursement intervient dans un délai de
          quatorze (14) jours après réception ou preuve d'expédition du retour.
        </Article>

        <Article titre="Article 9 — Garanties légales">
          Indépendamment de toute garantie commerciale, le vendeur reste tenu de
          la garantie légale de conformité (articles L217-3 et suivants du Code
          de la consommation) et de la garantie contre les vices cachés
          (articles 1641 et suivants du Code civil). Le Client peut exercer ces
          garanties en contactant [EMAIL].
        </Article>

        <Article titre="Article 10 — Responsabilité">
          Le vendeur ne saurait être tenu responsable de l'inexécution du contrat
          en cas de force majeure ou de fait imprévisible et insurmontable d'un
          tiers. [À adapter selon ta situation.]
        </Article>

        <Article titre="Article 11 — Données personnelles">
          Les données collectées sont nécessaires au traitement des commandes et
          traitées conformément à la politique de confidentialité du site et au
          RGPD. Le Client dispose d'un droit d'accès, de rectification et de
          suppression de ses données en contactant [EMAIL].
        </Article>

        <Article titre="Article 12 — Propriété intellectuelle">
          L'ensemble des éléments du site (textes, images, logos) est protégé par
          le droit de la propriété intellectuelle et reste la propriété de [NOM]
          ou de ses partenaires.
        </Article>

        <Article titre="Article 13 — Litiges et droit applicable">
          Les présentes CGV sont soumises au droit français. En cas de litige, le
          Client peut recourir gratuitement à un médiateur de la consommation
          [nom du médiateur à indiquer] avant toute action judiciaire. À défaut
          de résolution amiable, les tribunaux français sont compétents.
        </Article>
      </div>

      {/* Retour */}
      <div className="mt-12 border-t border-slate-200 pt-6">
        <Link
          to="/"
          className="inline-flex items-center text-sm font-medium text-blue-900 hover:underline"
        >
          ← Retour à l'accueil
        </Link>
      </div>
    </main>
  );
}

// Petit composant interne pour factoriser le style des articles
function Article({ titre, children }) {
  return (
    <section>
      <h2 className="mb-2 text-xl font-semibold text-slate-900">{titre}</h2>
      <div className="text-slate-700">{children}</div>
    </section>
  );
}

export default CGV;