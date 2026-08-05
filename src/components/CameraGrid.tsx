import { CameraCard } from './cameraCard'
import { cameras } from '../lib/demoData'

export default function CameraGrid(){
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cameras.map(c=> (
        <CameraCard key={c.id} camera={c} />
      ))}
    </div>
  )
}
