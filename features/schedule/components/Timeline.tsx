import { ScheduleItem } from '../types/schedule.types'
import TimelineItem from './TimelineItem'
import Container from '@/components/shared/Container'

export default function Timeline({ items }: { items: ScheduleItem[] }) {
  return (
    <section className="pb-24 relative">
      <Container className="relative">
        {/* Continuous Vertical Line */}
        <div className="absolute left-[19px] sm:left-[27px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/20 to-transparent opacity-20 hidden sm:block"></div>
        
        <div className="flex flex-col max-w-5xl mx-auto">
          {items.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}
