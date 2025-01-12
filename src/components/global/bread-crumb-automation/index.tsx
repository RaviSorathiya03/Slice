'use client'

import { PencilDuoToneBlack } from '@/icons'
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ChevronRight, Undo, Redo } from 'lucide-react'
import React, { useState } from 'react'
import ActivateAutomationButton from '../activate-automation-button'

interface AutomationBreadcrumbProps {
  automationTitle: string
  onTitleEdit?: (newTitle: string) => void
}

export const AutomationBreadcrumb: React.FC<AutomationBreadcrumbProps> = ({
  automationTitle,
  onTitleEdit
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(automationTitle)

  const handleTitleEdit = () => {
    if (isEditing) {
      onTitleEdit?.(title)
    }
    setIsEditing(!isEditing)
  }

  return (
    <div className="w-full p-3 sm:p-4 bg-[#18181B1A] rounded-full flex flex-col sm:flex-row justify-between items-center gap-y-3 sm:gap-y-0">
      <div className="flex items-center gap-x-2 sm:gap-x-3 text-sm sm:text-base">
        <span className="text-[#9B9CA0]">Automations</span>
        <ChevronRight className="w-4 h-4 text-[#5c75d6]" />
        <div className="flex items-center gap-x-2">
          {isEditing ? (
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-transparent border-b border-[#5c75d6] text-[#9B9CA0] focus:outline-none"
              autoFocus
            />
          ) : (
            <span className="text-[#9B9CA0] truncate max-w-[150px] sm:max-w-[300px]">{title}</span>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            onClick={handleTitleEdit}
          >
            <PencilDuoToneBlack  />
            <span className="sr-only">{isEditing ? 'Save' : 'Edit'} automation title</span>
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-x-3 sm:gap-x-5 text-xs sm:text-sm">
        <span className="text-text-secondary/60 hidden sm:inline">
          All updates are automatically saved
        </span>
        <Separator orientation="vertical" className="h-4 hidden sm:block" />
        <span className="text-text-secondary">Changes Saved</span>
        <div className="flex items-center gap-x-2">
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <Undo className="h-4 w-4" />
            <span className="sr-only">Undo</span>
          </Button>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <Redo className="h-4 w-4" />
            <span className="sr-only">Redo</span>
          </Button>
        </div>
      </div>
      <ActivateAutomationButton />
    </div>
  )
}
