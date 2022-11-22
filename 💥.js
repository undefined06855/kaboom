const wrapper = document.getElementById("wrapper")
    , audio = document.querySelector("audio")

    , ctx = new AudioContext()

function createKaboom()
{
    const el = document.createElement("img")

    el.src = "./💥.gif"

    setTimeout(() => {
        wrapper.appendChild(el)

        setTimeout(() => {
            el.remove()
        }, 600)
    }, 500)
}

function play(buf)
{   
    const track = ctx.createBufferSource();
    track.buffer = buf;
    track.connect(ctx.destination);
    track.start();
}

wrapper.addEventListener("click", () => {
    if (ctx.state === "suspended") ctx.resume()
    fetch("💥.mp3", {mode: "cors"}).then(r => {return r.arrayBuffer()}).then(b => ctx.decodeAudioData(b, play));
    createKaboom()
})