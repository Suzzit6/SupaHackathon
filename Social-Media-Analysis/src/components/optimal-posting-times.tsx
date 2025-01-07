import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface TimeSlot {
  period: string
  timeRange: string
  performance: string
  colorClass: string
}

interface OptimalPostingTimesProps {
  timeSlots: TimeSlot[]
}

export function OptimalPostingTimes({ timeSlots }: OptimalPostingTimesProps) {
  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-white">
          Optimal Posting Times
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {timeSlots.map((slot) => (
            <div
              key={slot.period}
              className="bg-gray-800/50 rounded-lg p-6 text-center"
            >
              <h3 className="text-lg font-medium text-white mb-2">
                {slot.period}
              </h3>
              <p className="text-sm text-gray-400 mb-3">
                {slot.timeRange}
              </p>
              <p className={`text-sm ${slot.colorClass}`}>
                {slot.performance}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

