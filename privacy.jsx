// privacy.jsx — contenu de la Politique de confidentialité (rendu dans un modal).
const PRIVACY = {
  fr: {
    title: "Politique de Confidentialité",
    updated: "Dernière mise à jour : 19 avril 2026",
    sections: [
      { h: "1. Identité du responsable du traitement", p: [
        "Le site coincarriere.com (ci-après « CoinCarriere » ou « la Plateforme ») est exploité par : Raison sociale : 9558-9321 Québec inc., faisant affaire sous le nom CoinCarriere. NEQ : 1181724304. Siège social : Québec, QC, Canada. Courriel : contact@coincarriere.com. Site web : coincarriere.com.",
        "Le responsable de la protection des renseignements personnels est le plus haut dirigeant de l'entreprise, joignable à l'adresse ci-dessus."
      ]},
      { h: "2. Champ d'application", p: [
        "La présente politique s'applique à tous les utilisateurs de la Plateforme, qu'ils soient candidats, recruteurs, employeurs ou simples visiteurs, et ce, quel que soit leur lieu de résidence. Elle couvre l'ensemble des renseignements personnels collectés via le site web, les formulaires, le dépôt de CV, la création de compte et l'utilisation des services de recrutement.",
        "CoinCarriere se conforme aux lois applicables en matière de protection des renseignements personnels, notamment la Loi 25 du Québec (RLRQ, c. P-39.1), la LPRPDE du Canada, le RGPD de l'Union européenne, et la Loi n° 09-08 du Maroc."
      ]},
      { h: "3. Renseignements personnels collectés", p: [
        "Renseignements fournis directement : identification (prénom, nom, courriel, téléphone), informations professionnelles (CV, lettre de motivation, expérience, formation, compétences), informations de profil (ville, pays, LinkedIn), informations de compte (identifiants, mot de passe chiffré).",
        "Renseignements collectés automatiquement : données techniques (adresse IP, navigateur, système), données de navigation, témoins (cookies), données de localisation déduites de l'IP.",
        "Renseignements reçus de tiers : informations transmises par un employeur, informations provenant de sources publiques."
      ]},
      { h: "4. Finalités et bases légales", p: [
        "Fournir les services de recrutement, gérer les comptes, permettre le dépôt et la consultation de CV, transmettre les candidatures, envoyer des notifications et communications, améliorer la Plateforme, prévenir la fraude et respecter les obligations légales. Bases légales : exécution du contrat, consentement, intérêt légitime, obligation légale."
      ]},
      { h: "5. Partage et communication", p: [
        "Vos renseignements peuvent être communiqués aux employeurs/recruteurs concernés par votre candidature, à nos sous-traitants (Cloudflare, Google, Meta, AWS) liés par des obligations de confidentialité, et aux autorités légales lorsque la loi l'exige.",
        "Nous ne vendons jamais vos renseignements personnels. Nous ne louons pas, n'échangeons pas et ne monétisons pas vos données."
      ]},
      { h: "6. Transferts hors du Québec et du Canada", p: [
        "Certains sous-traitants sont situés aux États-Unis. Conformément à la Loi 25, nous réalisons une évaluation des facteurs relatifs à la vie privée (EFVP) avant tout transfert, encadré par des clauses contractuelles appropriées."
      ]},
      { h: "7. Conservation des renseignements", p: [
        "CV déposés : 5 ans. Comptes candidats : 5 ans après la dernière connexion. Comptes employeurs : durée de la relation + 3 ans. Données de candidature : 5 ans. Journaux d'audit : 3 ans. Données analytiques anonymisées : 26 mois. À l'expiration, les renseignements sont supprimés ou anonymisés."
      ]},
      { h: "8. Témoins (cookies)", p: [
        "Témoins essentiels (authentification, sécurité), analytiques (Google Analytics, 26 mois) et publicitaires (Google Ads, Meta Ads, 90 jours). Vous pouvez gérer vos préférences via votre navigateur ou les outils de désactivation des fournisseurs. Le refus des témoins essentiels peut affecter le fonctionnement de la Plateforme."
      ]},
      { h: "9. Vos droits", p: [
        "Pour tous : droit d'accès, de rectification, de suppression, de retrait du consentement, de désindexation et de portabilité.",
        "UE/EEE (RGPD) : droit d'opposition, de limitation, de réclamation (ex. CNIL). Maroc (Loi 09-08) : droit d'opposition et de réclamation auprès de la CNDP.",
        "Pour exercer vos droits, écrivez à contact@coincarriere.com. Nous répondons sous 30 jours."
      ]},
      { h: "10. Sécurité", p: [
        "Chiffrement des mots de passe et des communications (HTTPS/TLS), authentification par jetons (JWT), isolation des données par organisation, contrôle d'accès par rôles (RBAC), journaux d'audit, limitation de débit et sauvegardes régulières. En cas d'incident, nous vous aviserons conformément aux lois applicables."
      ]},
      { h: "11. Protection des mineurs", p: [
        "La Plateforme est destinée aux personnes âgées de 16 ans et plus. Nous ne collectons pas sciemment de renseignements auprès de personnes de moins de 16 ans."
      ]},
      { h: "12. Incident de confidentialité", p: [
        "En cas d'incident présentant un risque de préjudice sérieux, nous prenons les mesures pour réduire les risques, avisons la Commission d'accès à l'information du Québec (CAI) et les personnes concernées, et tenons un registre."
      ]},
      { h: "13. Modifications", p: [
        "Nous pouvons mettre à jour cette politique périodiquement. En cas de modification substantielle, nous vous informerons par courriel ou par un avis visible. La date de dernière mise à jour est indiquée en haut de cette page."
      ]},
      { h: "14. Contact", p: [
        "Courriel : contact@coincarriere.com — 9558-9321 Québec inc. (CoinCarriere), Québec, QC, Canada.",
        "Plaintes : CAI (Québec), Commissariat à la protection de la vie privée du Canada, autorité de contrôle de l'UE, ou CNDP (Maroc — cndp.ma)."
      ]}
    ]
  },
  ar: {
    title: "سياسة الخصوصية",
    updated: "آخر تحديث: 19 أبريل 2026",
    sections: [
      { h: "1. المسؤول عن المعالجة", p: [
        "يُدار موقع coincarriere.com من طرف شركة 9558-9321 Québec inc.، تحت اسم CoinCarriere. المقر: كيبيك، كندا. البريد: contact@coincarriere.com."
      ]},
      { h: "2. نطاق التطبيق", p: [
        "تنطبق هذه السياسة على جميع المستخدمين (مرشحين، موظِّفين، زوّار) بغض النظر عن مكان إقامتهم، وتلتزم CoinCarriere بقانون كيبيك 25، وLPRPDE الكندي، وRGPD الأوروبي، والقانون المغربي 09-08."
      ]},
      { h: "3. المعطيات المجمَّعة", p: [
        "معطيات تُقدَّم مباشرة (الاسم، البريد، الهاتف، السيرة الذاتية، الخبرة)، ومعطيات تُجمَع تلقائيًا (عنوان IP، المتصفح، ملفات تعريف الارتباط)، ومعطيات من أطراف ثالثة."
      ]},
      { h: "4. الغايات والأسس القانونية", p: [
        "تقديم خدمات التوظيف، إدارة الحسابات، نشر السير الذاتية، إرسال الترشيحات والإشعارات، تحسين المنصة، ومنع الاحتيال. الأسس: تنفيذ العقد، الموافقة، المصلحة المشروعة، الالتزام القانوني."
      ]},
      { h: "5. المشاركة", p: [
        "قد تُشارَك معطياتك مع الموظِّفين المعنيين، ومع مزوّدي الخدمات (Cloudflare وGoogle وMeta وAWS)، ومع السلطات عند الاقتضاء. لا نبيع معطياتك الشخصية أبدًا."
      ]},
      { h: "6. النقل خارج كندا", p: [
        "قد تُنقَل بعض المعطيات إلى الولايات المتحدة عبر مزوّدي الخدمات، مع ضمانات تعاقدية وفقًا للقانون 25."
      ]},
      { h: "7. مدة الحفظ", p: [
        "السير الذاتية وحسابات المرشحين: 5 سنوات. حسابات الموظِّفين: مدة العلاقة + 3 سنوات. سجلات التدقيق: 3 سنوات. المعطيات التحليلية: 26 شهرًا."
      ]},
      { h: "8. ملفات تعريف الارتباط", p: [
        "ملفات أساسية وتحليلية وإعلانية. يمكنك التحكم في تفضيلاتك عبر المتصفح أو أدوات المزوّدين."
      ]},
      { h: "9. حقوقك", p: [
        "حق الوصول والتصحيح والحذف وسحب الموافقة والنقل. لممارسة حقوقك راسل contact@coincarriere.com (الرد خلال 30 يومًا). في المغرب يمكنك تقديم شكوى لدى CNDP."
      ]},
      { h: "10. الأمان", p: [
        "تشفير كلمات المرور والاتصالات (HTTPS/TLS)، مصادقة بالرموز، عزل المعطيات، التحكم في الوصول حسب الأدوار، وسجلات تدقيق ونسخ احتياطية منتظمة."
      ]},
      { h: "11. حماية القاصرين", p: [
        "المنصة موجَّهة للأشخاص من سن 16 فما فوق. لا نجمع عمدًا معطيات من هم دون 16 سنة."
      ]},
      { h: "12. حوادث الخصوصية", p: [
        "في حال وجود خطر ضرر جسيم، نتخذ التدابير اللازمة ونُبلغ السلطة المختصة والأشخاص المعنيين."
      ]},
      { h: "13. التعديلات", p: [
        "قد نُحدّث هذه السياسة دوريًا، وسنُعلمك بأي تعديل جوهري عبر البريد أو إشعار ظاهر."
      ]},
      { h: "14. الاتصال", p: [
        "البريد: contact@coincarriere.com — 9558-9321 Québec inc.، كيبيك، كندا."
      ]}
    ]
  }
};
window.PRIVACY = PRIVACY;
