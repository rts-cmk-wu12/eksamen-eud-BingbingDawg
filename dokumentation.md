# Dokumentaion for SwapHub
Dit navn:
Andreas Nielsen

Hold nr.:
WU12

Valgfri opgave:
Opgave C

## tech-stack
* Next.js - Next.js er et front-end framework baseret på React.js der giver adgang til f.eks. server-side rendering og static rendering. Server-side komponenter giver også en større sikkerhed, da alt kode afvikles på server i stedet for klienten

* React - React er et bibliotek som giv mulighed for at lave komponente og håndetere forskellige states. React har også et stort community og et stort modul-bibliotek, som der er aktivt, dokumenteret og understøttet. Det er også et af de mest brugte front-end bibliotekker så efterspøgelsen op React-udviklere er stor.

* Git - Git er et versionsværktøj, som kan bruges til at lave branches og versioner af min kode så man kan gå tilbage til tidligere versioner hvis jeg nu har lavet en fejl, git bruges sammen med git hub

* Tailwind - Tailwind er et utility-first CSS framework som har klasser like flex, pt-4, text-center og rotate-90 der kan blive brugt til at bygge hvilket som helst design direkte i markup markup.

* React-icons - React-icons er et ikon-bibliotek som er brugt sammen med react

* React-spinners - React-spinners er et library som er brugt til at lave forskellige spinners. Jeg bruger det til at lave loading på login page.

* React-toastify - React-toastify et library hvor jeg nemt kan tilføje notification til min web-app

* Zod - Et valideringsbibliotek til objekter og strings. Jeg bruger Zod til blandt andet at validere bruger-input fra formularer.

## Kode-eksempel

Sign-in form
src/app/components/forms/sign-in-form/index.jsx

``` jsx
"use client";


{/*.... Kode her ....*/}

export default function SigninFormular({className=""}){
    const [formState, formAction, isPending] = useActionState(signinAction, {});

    useEffect(function() {
        if(formState?.success) {
            toast.success("You're now signed in")
        }
    }, [formState]);

    return isPending ? (
        <ClipLoader
        color="#EAEAEA"
        loading={true}
        />
    ) : (
        <form action={formAction} className=" mx-auto mt-[91px] mb-[91px]  border w-[320px] p-6 rounded-sm ">
        {/* ... resterende kode her */}
        
        </form>
    )
}

```
* Der er oprettet en React function som er client-sitet grundet man kun kan bruge hooks og states i client-site som bliver brugt til at logge ind på websitet med. I denne function bruger jeg en const der destrukturer formState, formAction og isPending.

* Derefter bliver der brugt  en useActionState hook, som bliver brugt til at håndtere formState, formAction, isPending som parser singinAction (hvilket er en custom hook som tjekker password og email) og et tomt object som bliver kaldt når brugeren prøver at logge ind.

* Efter det bruges en useEffect hook, som kører hver gang formState bliver ændret, fordi formState er sat som dependency i array'et

* Når formState så bliver opdateret, tjekker useEffect om login-handlingen var en success via formState.success. Hvis login så er en success vises en toast besked der informere at brugeren er logget ind

* Dernæst køres en ternary operator der tjekker, if isPending er true, isPending er en tilstand der indikere om en async handling (som en login-process eller et svar fra useEffect) stadig er igang. Hvis isPending er true retuneres en Cliploader( en loader fra et React-library) og else altså hcis isPending er false bliver en form retuneret
