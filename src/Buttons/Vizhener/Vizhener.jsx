import React from "react";

const Vizhener = () => {
  const [myText, setMyText] = React.useState("");
  const [alphabit, setAlphabit] = React.useState("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  const [myKey, setMyKey] = React.useState("PARENTS");
  const [decryptMSG, setDecryptMSG] = React.useState("");
  const [encryptMSG, setEncryptMSG] = React.useState("");

  React.useEffect(
    (mode) => {
      let maxLength = Math.max(myText.length, myKey.length);
      let r = "";
      let d = "";
      if (myText !== "") {
        for (let i = 0; i < maxLength; i++) {
          let mi = alphabit.indexOf(
            myText[i > myText.length ? i % myText.length : i]
          );
          console.log(mi);
          let ki_s = myKey[i > myKey.length ? i % myKey.length : i];
          let ki =
            typeof mode !== "undefined" && mode.indexOf("gronsfeld") !== -1
              ? parseInt(ki_s)
              : alphabit.indexOf(ki_s);
          let kid =
            typeof mode !== "undefined" && mode.indexOf("decrypt") !== -1
              ? -kid
              : kid;
          let c = alphabit[(alphabit.length + (mi + ki)) % alphabit.length]; //Символ по таблице Виженера
          let cd = alphabit[(alphabit.length + (mi + kid)) % alphabit.length];
          c =
            mode === "shifted_atbash"
              ? alphabit[alphabit.length - 1 - alphabit.indexOf(c)]
              : c; //Атбаш символа или символ
          setDecryptMSG((r += c)); //Добавить символ к результату
          setEncryptMSG((d += cd));
        }
      } else console.log("Nothing");
    },
    [myText]
  );

  return (
    <div>
      <input value={myText} onChange={(e) => setMyText(e.target.value)} />
      <p>{decryptMSG}</p>
      <p>{encryptMSG}</p>
    </div>
  );
};

export default Vizhener;
