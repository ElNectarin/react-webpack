import React from "react";
import "./Vizhener.css"

const Vizhener = () => {
  const [myText, setMyText] = React.useState("");
  const [alphabit, setAlphabit] = React.useState("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  const [myKey, setMyKey] = React.useState("PARENTS");
  const [decryptMSG, setDecryptMSG] = React.useState("");
  const [encryptMSG, setEncryptMSG] = React.useState("");

  React.useEffect(() => {
    let maxLength = Math.max(myText.length, myKey.length);
    let r = "";
    let d = decryptMSG;
    if (myText !== "") {
      for (let i = 0; i < maxLength; i++) {
        let mi = alphabit.indexOf(
          myText[i > myText.length ? i % myText.length : i]
        );
        let ki_s = myKey[i > myKey.length ? i % myKey.length : i];
        let ki = alphabit.indexOf(ki_s);
        let kid = -ki;
        let c = alphabit[(alphabit.length + (mi + ki)) % alphabit.length]; //Символ по таблице Виженера
        let cd = alphabit[(alphabit.length + (mi + kid)) % alphabit.length];
        setEncryptMSG((r += c)); //Добавить символ к результату
        setDecryptMSG((d += cd));
      }
    } else {
      setEncryptMSG("");
      setDecryptMSG("");
    }
  }, [myText]);

  return (
    <div>
      <h3>Enter your text</h3>
      <input className="textInput" value={myText} onChange={(e) => setMyText(e.target.value)} type="text" />
      <p>Encryprt message: {encryptMSG}</p>
      <p>Decrypt message: {decryptMSG}</p>
    </div>
  );
};

export default Vizhener;
