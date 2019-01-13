import {Question} from "../models/Question";

export class QuestionsService {
    questionsList: Question[] = [
        {"category":"Vehicles",
            "type":"multiple",
            "difficulty":"easy",
            "question":"Where are the cars of the brand &#039;Ferrari&#039; manufactured?",
            "correct_answer":"Italy",
            "incorrect_answers":["Romania","Germany","Russia"]},
        {"category":"Entertainment: Cartoon & Animations",
            "type":"multiple",
            "difficulty":"easy",
            "question":"The song &#039;Little April Shower&#039; features in which Disney cartoon film?",
            "correct_answer":"Bambi",
            "incorrect_answers":["Cinderella","Pinocchio","The Jungle Book"]},
        {"category":"Entertainment: Music",
            "type":"multiple",
            "difficulty":"easy",
            "question":"Which country does the band Rammstein hail from?",
            "correct_answer":"Germany",
            "incorrect_answers":["Austria","Armenia","Belgium"]},
        {"category":"Entertainment: Music",
            "type":"multiple",
            "difficulty":"easy",
            "question":"What is the name of Finnish DJ Darude&#039;s hit single released in October 1999?",
            "correct_answer":"Sandstorm",
            "incorrect_answers":["Dust Devil","Sirocco","Khamsin"]},
        {"category":"General Knowledge",
            "type":"multiple",
            "difficulty":"easy",
            "question":"How many colors are there in a rainbow?",
            "correct_answer":"7",
            "incorrect_answers":["8","9","10"]},
        {"category":"Entertainment: Television",
            "type":"multiple",
            "difficulty":"easy",
            "question":"The &quot;Psycho&quot; series of videos on YouTube was created by which of the following?",
            "correct_answer":"RiDGiD STUDiOS",
            "incorrect_answers":["Dan Bell","Billy Familia","VeganGainz"]},
        {"category":"Entertainment: Books",
            "type":"multiple",
            "difficulty":"easy",
            "question":"Who was the author of the 1954 novel, &quot;Lord of the Flies&quot;?",
            "correct_answer":"William Golding","incorrect_answers":["Stephen King","F. Scott Fitzgerald","Hunter Fox"]},
        {"category":"Entertainment: Video Games",
            "type":"multiple",
            "difficulty":"easy",
            "question":"What is the homeworld of the Elites from Halo?",
            "correct_answer":"Sanghelios",
            "incorrect_answers":["Te","Doisac","Eayn"]},
        {"category":"Entertainment: Music",
            "type":"multiple",
            "difficulty":"easy",
            "question":"Which Nirvana album had a naked baby on the cover?",
            "correct_answer":"Nevermind",
            "incorrect_answers":["Bleach","In Utero","Incesticide"]},
        {"category":"History",
            "type":"multiple",
            "difficulty":"easy",
            "question":"How was Socrates executed?",
            "correct_answer":"Poison",
            "incorrect_answers":["Decapitation","Firing squad","Crucifixion "]},
        {"category":"Entertainment: Music",
            "type":"boolean",
            "difficulty":"medium",
            "question":"Arcade Fire&#039;s &#039;The Suburbs&#039; won the Album of the Year award in the 2011 Grammys.",
            "correct_answer":"True","incorrect_answers":["False"]},
        {"category":"Geography",
            "type":"multiple",
            "difficulty":"medium",
            "question":"Which of these countries is &quot;doubly landlocked&quot; (surrounded entirely by one or more landlocked countries)?",
            "correct_answer":"Uzbekistan",
            "incorrect_answers":["Switzerland","Bolivia","Ethiopia"]},
        {"category":"Geography",
            "type":"multiple",
            "difficulty":"medium",
            "question":"What is the largest non-continental island in the world?",
            "correct_answer":"Greenland",
            "incorrect_answers":["New Guinea","Borneo","Madagascar"]},
        {"category":"Entertainment: Music",
            "type":"multiple",
            "difficulty":"medium",
            "question":"Which one of these Pink Floyd albums were also a movie?",
            "correct_answer":"The Wall",
            "incorrect_answers":["The Dark Side of the Moon","Wish You Were Here","Animals"]},
        {"category":"Entertainment: Video Games",
            "type":"multiple",
            "difficulty":"medium",
            "question":"In Fallout 4, which type of power armor is first encountered in the early mission &quot;When Freedom Calls&quot; in a crashed Vertibird?",
            "correct_answer":"T-45",
            "incorrect_answers":["T-51","T-60","X-01"]},
        {"category":"Entertainment: Music",
            "type":"multiple",
            "difficulty":"medium",
            "question":"When did The Beatles release the LP &quot;Please Please Me&quot;?",
            "correct_answer":"1963",
            "incorrect_answers":["1970","1960","1969"]},
        {"category":"Entertainment: Video Games",
            "type":"multiple",
            "difficulty":"medium",
            "question":"Which one of these was not a member of the Fiendish Five in the game Sly Cooper and the Thievius Raccoonus?",
            "correct_answer":"Dimitri Lousteau",
            "incorrect_answers":["Mz. Ruby","Muggshot","Clockwerk"]},
        {"category":"Entertainment: Music",
            "type":"multiple",
            "difficulty":"medium",
            "question":"Which of these bands was a featuring artist in Compton rapper Kendrick Lamar&#039;s 2017 album, &quot;DAMN.&quot;?",
            "correct_answer":"U2",
            "incorrect_answers":["Radiohead","Coldplay","Bon Jovi"]},
        {"category":"Entertainment: Japanese Anime & Manga",
            "type":"multiple",
            "difficulty":"medium",
            "question":"In &quot;Highschool DxD&quot;, Koneko Toujou is from what race?",
            "correct_answer":"Nekomata",
            "incorrect_answers":["Kitsune","Human","Kappa"]},
        {"category":"Entertainment: Books",
            "type":"multiple",
            "difficulty":"medium",
            "question":"What is the name of Eragon&#039;s dragon in &quot;Eragon&quot;?",
            "correct_answer":"Saphira",
            "incorrect_answers":["Glaedr","Thorn","Arya"]},
        {"category":"Entertainment: Film",
            "type":"multiple",
            "difficulty":"hard",
            "question":"In the 1976 film &#039;Taxi Driver&#039;, how many guns did Travis buy from the salesman?",
            "correct_answer":"4",
            "incorrect_answers":["2","6","1"]},
        {"category":"Science & Nature",
            "type":"multiple",
            "difficulty":"hard",
            "question":"All of the following human genetic haplogroup names are shared between Y-chromosome and mitochondrial DNA haplogroups EXCEPT:",
            "correct_answer":"Haplogroup U",
            "incorrect_answers":["Haplogroup L","Haplogroup T","Haplogroup J"]},
        {"category":"Geography",
            "type":"multiple",
            "difficulty":"hard",
            "question":"In 2012 the German-speaking microstate &quot;Liechtenstein&quot; in Central Europe had a population of how many inhabitants?",
            "correct_answer":"36,600",
            "incorrect_answers":["2,400","90,000","323,400"]},
        {"category":"Entertainment: Video Games",
            "type":"multiple",
            "difficulty":"hard",
            "question":"What is the fastest speed possible in Trackmania&sup2;: Stadium?",
            "correct_answer":"1000  km\/h",
            "incorrect_answers":["500 km\/h","320 km\/h","100 km\/h"]},
        {"category":"Entertainment: Music",
            "type":"multiple",
            "difficulty":"hard",
            "question":"Which of these songs is NOT included in the Suicide Squad OST?",
            "correct_answer":"Skies on Fire - AC\/DC",
            "incorrect_answers":["Heathens - Twenty One Pilots","Without Me - Eminem","Fortunate Son - Creedence Clearwater Revival"]},
        {"category":"Entertainment: Comics",
            "type":"multiple",
            "difficulty":"hard",
            "question":"What year was the first San Diego Comic-Con?",
            "correct_answer":"1970",
            "incorrect_answers":["2000","1990","1985"]},
        {"category":"Animals",
            "type":"multiple",
            "difficulty":"hard",
            "question":"What is the name of the copper-rich protein that creates the blue blood in the Antarctic octopus?",
            "correct_answer":"Hemocyanin",
            "incorrect_answers":["Cytochrome","Iron","Methionine"]},
        {"category":"Science & Nature",
            "type":"multiple",
            "difficulty":"hard",
            "question":"What is the unit of electrical inductance?",
            "correct_answer":"Henry",
            "incorrect_answers":["Weber","Coulomb","Mho"]},
        {"category":"Entertainment: Video Games",
            "type":"multiple",
            "difficulty":"hard",
            "question":"In the &quot;Ace Attorney&quot; series, who was the truly responsible of the forging of the autopsy report of the pivotal IS-7 incident?",
            "correct_answer":"Bansai Ichiyanagi",
            "incorrect_answers":["Manfred Von Karma","Gregory Edgeworth","Tateyuki Shigaraki"]},
        {"category":"General Knowledge",
            "type":"multiple",
            "difficulty":"hard",
            "question":"In Guild Wars 2, what is the name of the legendary rainbow staff surrounded by an ever glowing rainbow aura?",
            "correct_answer":"The Bifrost",
            "incorrect_answers":["Bolt","Kudzu","The Moot"]}]
}