const MainComponent = () => {
  return (
    <section
      id="main-area"
      className="grid grid-cols-3 gap-6 bg-neutral-800/70 text-white backdrop-blur-sm backdrop-filter"
    >
      <div className="flex flex-col items-center p-7">
        <div className="article" id="kokpar">
          <h2 className="mb-2 text-xl font-bold">Кокпар</h2>
          <p>
            Кокпар — бақа ойыны. Жүз басшыларының орнынан ойнайды. Орта азиялық
            ұлттардың желілік ойындарының бірі. Бұл ойында таңқы, шошқа, ат,
            қара күрес кезінде бақалармен аттар арасында үйшірудің ең дәмділігін
            көрсететін біреу.
          </p>
          <img src="./images/kokpar.jpg" alt="Кокпар суреті" className="mt-4" />
          <button className="mt-4 rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            -->
          </button>
        </div>

        <div className="article" id="shogen">
          <h2 className="mb-2 text-xl font-bold">Шоген</h2>
          <p>
            Шоген — топтағы беру арқылы ойнау ойыны. Жүз басшыларының орнынан
            ойнайды. Берілетін адамдар өз жерінде болып, бөтендіріледі. Басылып
            топ бұрылады және оның ішіне төгеді. Ортадағы беруші жалғанып, оның
            ішіне төгіп, берілетін адамды топқа қабылдауы керек.
          </p>
          <img src="./images/shogen.jpg" alt="Шоген суреті" className="mt-4" />
          <button className="mt-4 rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            -->
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center p-7">
        <div
          className="article"
          id="togyzkumalak"
          style={{ gridColumn: "span 1" }}
        >
          <h2 className="mb-2 text-xl font-bold">Тогызқұмалақ</h2>
          <p>
            Тогызқұмалақ — сан ойыны. Жүз басшыларының орнынан ойнайды.
            Құмалақтар мен таңқылар арасында жүргізілетін бөлік ойыны.
            Тогызқұмалақтың құлауындағы жағдайда бір құмалақтың ішінен қызыл
            таңқыларды алуға мүмкіндік береді. Таңқы жиналған кезде, олардың
            барлығы адам кесіптік бір жерде болып, осы жерден кезеңдік
            таңқыларды біріктіріп, құмалаққа беруге болады. Құмалақ алған адам
            тогызқұмалақ ойыншы болып саналады. Ойындың мақсаты — құмалақтың
            ішінен мүмкін болған көбейген таңқыларды алып, басқа бір құмалаққа
            алу.
          </p>
          <img
            src="./images/togyzkumalak.jpg"
            alt="Тогызқұмалақ суреті"
            className="mt-4"
          />
          <button className="mt-4 rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            -->
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center p-7">
        <div className="article" id="baige">
          <h2 className="mb-2 text-xl font-bold">Байге</h2>
          <p>
            Байге — кеңес қарыстыру ойыны. Жүз басшыларының орнынан ойнайды.
            Ойында байге далада, берілетін қышқылдармен көтерілген дос байге
            жерге түседі. Осыда байге тура бөлінеді. Қазіргі кезде ойындағы
            далалардың бірі бір түрлі далалардан жасалған байге, бұған көз
            көрсетілген. Жерде далалар тірі тұрғызылған және байге азатталады.
          </p>
          <img src="./images/baige.jpg" alt="Байге суреті" className="mt-4" />
          <button className="mt-4 rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            -->
          </button>
        </div>

        <div className="article" id="zhorga-jarys">
          <h2 className="mb-2 text-xl font-bold">Жорга жарыс</h2>
          <p>
            Жорга жарыс — құмалақтың ойыншысының құлауындағы жағдайда сіңірлі
            кездегі басқа бір құмалақты ойнау. Құмалақтың арасында барынша
            қарым-қатынасын адамдар сеніп тапады. Бұл сенімді жол әдемі жұмысқа
            арналған. Сонымен, кейбір салынушылар таңқылардың қарым-қатынасын
            асып алуға құлау қарым-қатынасына бір назар салады. Олар жұмысшының
            жүзіне шайқас келтіреді және біреу сіздің көкірек мұсылмандығыңызды
            жауып алуға көмек етеді. Сіз өзіңізге, осы жерде бұл ойындың ең
            мақсатты тағдыры болып табылады.
          </p>
          <img
            src="./images/zhorga_jarys.jpg"
            alt="Жорга жарыс суреті"
            className="mt-4"
          />
          <button className="mt-4 rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Оку
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainComponent;
