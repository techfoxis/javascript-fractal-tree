const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const slider = document.getElementById('slider')
const label = document.getElementById('label')

let angle = slider.value

label.textContent = angle
slider.addEventListener('change', () => {
  angle = slider.value
  label.textContent = angle

  draw()
})

function draw () {
  ctx.setTransform(1, 0, 0, 1, 0.1, 0.1)
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.translate(canvas.width / 2, canvas.height)

  branch(125, true)
}

function branch (length, initial = false, thickness = 3, color = '#FFFFFF') {
  ctx.strokeStyle = color
  ctx.lineWidth = thickness
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'

  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.lineTo(0, -length)
  ctx.closePath()
  ctx.stroke()
  ctx.translate(0, -length)

  if (length > 8) {
    ctx.save()
    ctx.rotate(angle)
    branch(length * 0.75)
    ctx.restore()
    ctx.save()
    ctx.rotate(-angle)
    branch(length * 0.75)
    ctx.restore()
  }

}

draw()
